// 'lib' folder is used to store the utility functions that are used across the application as third party libraries
// This file is used to create a connection to the database

import pkg from 'pg';

const {Client} = pkg;

/**
 * Establishes and returns a connection to the PostgreSQL database
 * @async
 * @function getConnection
 * @returns {Promise<Client>} A promise that resolves to a connected PostgreSQL client instance
 * @throws {Error} When the connection cannot be established
 */

export async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'wally',
    password: 'wally',
    database: 'my_store'
  })
  await client.connect();
  return client;
}
