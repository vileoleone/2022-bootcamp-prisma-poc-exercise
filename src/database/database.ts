import pg from "pg"

const { Pool } = pg;

/* const configDatabase = {
    connectionString: process.env.Database_URL, 
    ssl: {
        rejectUnauthorized: false, 
    }
} */

const configDatabase = {
    connectionString: process.env.Database_URL
}

const connection = new Pool(configDatabase);

export default connection;