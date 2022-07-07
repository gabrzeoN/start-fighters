import pg from "pg";
import dotenv from "dotenv";
const {Pool} = pg;

dotenv.config();
const config = {
    connectionString: process.env.DATABASE_URL,
};

const db = new Pool(config);
export default db;