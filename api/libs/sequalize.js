import { Sequelize } from "sequelize";
import { config } from '../config/config.js';
import { setUpModels } from "../db/models/index.js";

/**
 * PostgreSQL connection URI string
 * @constant {string} URI
 * @description Constructs database connection string using environment variables and config settings
 * Format: postgres://[user]:[password]@[host]:[port]/[database]
 */

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
  dialect: 'mysql',
  logging: false,
});

setUpModels(sequelize);
sequelize.sync();
console.log('Database connected');

export default sequelize;
