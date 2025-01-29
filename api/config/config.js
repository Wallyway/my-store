import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });


/**
 * Configuration object for the application environment and database settings
 * @typedef {Object} Config
 * @property {string} env - Current environment (defaults to 'dev')
 * @property {number} port - Server port number (defaults to 3000)
 * @property {string} dbUser - Database user name
 * @property {string} dbPassword - Database password
 * @property {string} dbHost - Database host address
 * @property {string} dbName - Database name
 * @property {string} dbPort - Database port number
 * @exports config
 */

export const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}
