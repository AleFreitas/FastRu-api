import pool from "../config/database.js"
import { QueryResult } from "pg";
import { DishEntity } from "../protocols/dishes-types.js";

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

async function findDishByDate(date: Date): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM dishes
        WHERE date=$1;         
    `, [date]);
}

async function findDishByMainDish(id: number): Promise<QueryResult> {
    return pool.query(`
        SELECT id FROM dishes
        WHERE main_dish_id=$1;         
    `, [id]);
}

async function findDishByAccompaniment(id: number): Promise<QueryResult> {
    return pool.query(`
        SELECT id FROM dishes
        WHERE accompaniment_id=$1;         
    `, [id]);
}

async function findDishBySalad(id: number): Promise<QueryResult> {
    return pool.query(`
        SELECT id FROM dishes
        WHERE salad1_id=$1 OR salad2_id=$1;         
    `, [id]);
}

async function findDishByDessert(id: number): Promise<QueryResult> {
    return pool.query(`
        SELECT * FROM dishes
        WHERE dessert_id=$1;         
    `, [id]);
}

async function insertMainDish(name: string): Promise<QueryResult> {
    return pool.query(`
        INSERT INTO main_dishes (name)
        VALUES ($1)
    `, [name])
}

async function insertSalad(name: string): Promise<QueryResult> {
    return pool.query(`
        INSERT INTO salads (name)
        VALUES ($1)
    `, [name])
}

async function insertAccompaniment(name: string): Promise<QueryResult> {
    return pool.query(`
        INSERT INTO accompaniments (name)
        VALUES ($1)
    `, [name])
}

async function insertDessert(name: string): Promise<QueryResult> {
    return pool.query(`
        INSERT INTO desserts (name)
        VALUES ($1)
    `, [name])
}

async function insertDish(dish: DishEntity): Promise<QueryResult> {
    return pool.query(`
        INSERT INTO dishes (created_by,main_dish_id,salad1_id,salad2_id,accompaniment_id,dessert_id,date)
        VALUES ($1,$2,$3,$4,$5,$6,$7)
    `, [dish.worker_id, dish.main_dish_id, dish.salad1_id, dish.salad2_id, dish.accompaniment_id, dish.dessert_id, dish.date])
}

async function deleteDish(date:Date){
    return pool.query(`
        DELETE FROM dishes
        WHERE date=$1
    `, [date])
}

async function deleteDishById(id:number){
    return pool.query(`
        DELETE FROM dishes
        WHERE id=$1
    `, [id])
}

async function deleteMainDish(name:string){
    return pool.query(`
        DELETE FROM main_dishes
        WHERE name=$1
    `, [name])
}

async function deleteSalad(name:string){
    return pool.query(`
        DELETE FROM salads
        WHERE name=$1
    `, [name])
}

async function deleteAccompaniment(name:string){
    return pool.query(`
        DELETE FROM accompaniments
        WHERE name=$1
    `, [name])
}

async function deleteDessert(name:string){
    return pool.query(`
        DELETE FROM desserts
        WHERE name=$1
    `, [name])
}

export default {
    findMainDish,
    findSalad,
    findAccompaniment,
    findDessert,
    findDishByDate,
    findDishByAccompaniment,
    findDishByDessert,
    findDishByMainDish,
    findDishBySalad,
    insertMainDish,
    insertSalad,
    insertAccompaniment,
    insertDessert,
    insertDish,
    deleteDish,
    deleteMainDish,
    deleteDishById,
    deleteSalad,
    deleteAccompaniment,
    deleteDessert
}
