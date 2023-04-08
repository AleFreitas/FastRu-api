import pool from "../config/database.js"
import { QueryResult } from "pg";

async function findMainDish(name: string): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM main_dishes
        WHERE name=$1;         
    `, [name]);
}

async function findSalad(name: string): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM salads
        WHERE name=$1;         
    `, [name]);
}

async function insertMainDish(name: string): Promise<QueryResult>{
    return pool.query(`
        INSERT INTO main_dishes (name)
        VALUES ($1)
    `,[name])
}

async function insertSalad(name: string): Promise<QueryResult>{
    return pool.query(`
        INSERT INTO salads (name)
        VALUES ($1)
    `,[name])
}

export default {findMainDish, insertMainDish, findSalad, insertSalad}
