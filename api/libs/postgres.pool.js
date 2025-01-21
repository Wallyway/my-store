// 'lib' folder is used to store the utility functions that are used across the application as third party libraries
// This file is used to create a connection to the database

import pkg from 'pg';
import { config } from '../config/config.js';
const { Pool } = pkg;

/**
 * PostgreSQL connection URI string.
 * Format: postgres://user:password@host:port/database
 * @constant {string} URI
 * @see {@link https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING}
 */

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const pool = new Pool({connectionString: URI});

