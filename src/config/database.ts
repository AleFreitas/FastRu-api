import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production" && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};

const pool = new Pool(configDatabase);

export default pool;