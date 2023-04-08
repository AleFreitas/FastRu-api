import errors from '../errors/index.js';
import dishesRepositories from '../repositories/dishes-repositories.js';

async function registerMainDish(name: string) {
    const mainDishExists = await dishesRepositories.findMainDish(name)
    if (mainDishExists.rows.length !== 0) throw errors.conflictError("main dish already exists")
    await dishesRepositories.insertMainDish(name);
}

async function registerSalad(name: string) {
    const saladExists = await dishesRepositories.findSalad(name)
    if (saladExists.rows.length !== 0) throw errors.conflictError("salad already exists")
    await dishesRepositories.insertSalad(name);
}

export default {registerMainDish, registerSalad}