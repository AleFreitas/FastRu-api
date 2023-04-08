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

async function findAccompaniment(name: string): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM accompaniments
        WHERE name=$1;         
    `, [name]);
}

async function findDessert(name: string): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM desserts
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

async function insertAccompaniment(name: string): Promise<QueryResult>{
    return pool.query(`
        INSERT INTO accompaniments (name)
        VALUES ($1)
    `,[name])
}

async function insertDessert(name: string): Promise<QueryResult>{
    return pool.query(`
        INSERT INTO desserts (name)
        VALUES ($1)
    `,[name])
}

export default {
    findMainDish, 
    findSalad,
    findAccompaniment,
    findDessert,
    insertMainDish,
    insertSalad,
    insertAccompaniment,
    insertDessert
}
