import pool from "../config/database.js"
import { QueryResult } from "pg";
import { Dish } from "../protocols/dishes-types.js";

async function findWorker(id: number): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM workers
        WHERE id=$1;         
    `, [id]);
}

export default {findWorker}