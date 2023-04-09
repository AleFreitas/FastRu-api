import errors from '../errors/index.js';
import { Dish } from '../protocols/dishes-types.js';
import dishesRepositories from '../repositories/dishes-repositories.js';
import userRepositories from '../repositories/user-repositories.js';

async function registerMainDish(name: string) {
    const mainDishExists = await dishesRepositories.findMainDish(name)
    if (mainDishExists.rowCount !== 0) throw errors.conflictError("main dish already exists")
    await dishesRepositories.insertMainDish(name);
}

async function registerSalad(name: string) {
    const saladExists = await dishesRepositories.findSalad(name)
    if (saladExists.rowCount !== 0) throw errors.conflictError("salad already exists")
    await dishesRepositories.insertSalad(name);
}

async function registerAccompaniment(name: string) {
    const accompanimentExists = await dishesRepositories.findAccompaniment(name)
    if (accompanimentExists.rowCount !== 0) throw errors.conflictError("accompaniment already exists")
    await dishesRepositories.insertAccompaniment(name);
}

async function registerDessert(name: string) {
    const dessertExists = await dishesRepositories.findDessert(name)
    if (dessertExists.rowCount !== 0) throw errors.conflictError("dessert already exists")
    await dishesRepositories.insertDessert(name);
}

async function registerDish(dish: Dish, worker_id) {
    const mainDishExists = await dishesRepositories.findMainDish(dish.main_dish)
    const salad1Exists = await dishesRepositories.findSalad(dish.salad1)
    const salad2Exists = await dishesRepositories.findSalad(dish.salad2)
    const accompanimentExists = await dishesRepositories.findAccompaniment(dish.accompaniment)
    const dessertExists = await dishesRepositories.findDessert(dish.dessert)
    const workerExists = await userRepositories.findWorker(worker_id)


    if (mainDishExists.rowCount === 0) throw errors.conflictError("main dish doesn't exist")
    if (salad1Exists.rowCount === 0) throw errors.conflictError(`salad ${dish.salad1} doesn't exist`)
    if (salad2Exists.rowCount === 0) throw errors.conflictError(`salad ${dish.salad2} doesn't exist`)
    if (accompanimentExists.rowCount === 0) throw errors.conflictError("accompaniment doesn't exist")
    if (dessertExists.rowCount === 0) throw errors.conflictError("dessert doesn't exist")
    if (workerExists.rowCount === 0) throw errors.conflictError("worker doesn't exist")
    
    const dishExists = await dishesRepositories.findDishByDate(dish.date)
    if (dishExists.rowCount !== 0) throw errors.conflictError("there is already a dish planned for this day")

    const dishIds = {
        worker_id:worker_id,
        main_dish_id:mainDishExists.rows[0].id,
        salad1_id:salad1Exists.rows[0].id,
        salad2_id:salad2Exists.rows[0].id,
        accompaniment_id:accompanimentExists.rows[0].id,
        dessert_id:dessertExists.rows[0].id,
        date:dish.date
    }
    await dishesRepositories.insertDish(dishIds)
}

async function removeDish(date:Date){
    const dishExists = await dishesRepositories.findDishByDate(date)
    if (dishExists.rowCount === 0) throw errors.notFoundError()
    await dishesRepositories.deleteDish(date)
}

async function removeMainDish(name: string) {
    const mainDishExists = await dishesRepositories.findMainDish(name)
    if (mainDishExists.rowCount === 0) throw errors.notFoundError()
    const dishExists = await dishesRepositories.findDishByMainDish(mainDishExists.rows[0].id)
    if (dishExists.rowCount !== 0) {
        await dishesRepositories.deleteDishById(dishExists.rows[0].id)
    }
    await dishesRepositories.deleteMainDish(name);
}

export default {
    registerMainDish, 
    registerSalad,
    registerAccompaniment,
    registerDessert,
    registerDish,
    removeDish,
    removeMainDish
}