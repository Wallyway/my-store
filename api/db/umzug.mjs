// filepath: /e:/jseba/Documents/Projects/platzi/my-store/api/db/migrations/umzug.mjs
import { createRequire } from 'module';
import { Umzug, SequelizeStorage } from 'umzug';
import path from 'path';
import url from 'url';

// Create a CommonJS require function
const require = createRequire(import.meta.url);

// Import your existing Sequelize instance
import sequelize from '../libs/sequalize.js'; // Adjust the path as necessary

// Define the path to your migrations folder
const migrationsPath = path.resolve('api', 'db', 'migrations');

// Initialize Umzug with the existing Sequelize instance
export const migrator = new Umzug({
  migrations: {
    glob: ['**/*.{js,cjs,mjs}', { cwd: migrationsPath }],
    resolve: ({ name, path: migrationPath }) => {
      if (migrationPath.endsWith('.mjs') || migrationPath.endsWith('.js')) {
        return {
          name,
          path: migrationPath,
          up: async (params) => {
            const migrationModule = await import(url.pathToFileURL(path.resolve(migrationsPath, migrationPath)).href);
            return migrationModule.up(params);
          },
          down: async (params) => {
            const migrationModule = await import(url.pathToFileURL(path.resolve(migrationsPath, migrationPath)).href);
            return migrationModule.down(params);
          },
        };
      }

      // For CommonJS migration files
      const migration = require(path.resolve(migrationsPath, migrationPath));
      return {
        name,
        path: migrationPath,
        up: migration.up,
        down: migration.down,
      };
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// Run migrations as CLI
migrator.runAsCLI()
  .then(() => {
    console.log('Migrations completed successfully.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });


  // export const mumzug = migrator;

  // // Handle CLI calls
  // const type = process.argv[2]; // 'up' or 'create'

  // if (type === 'up') {
  //   await mumzug.up();
  // } else if (type === 'create') {
  //   const name = process.argv[4];
  //   const folder = process.argv[6];
  //   await mumzug.create({ name, folder });
  // }else if (type === 'down') {
  //   await mumzug.down();
  // }
