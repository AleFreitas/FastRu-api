import { Request, Response } from "express";
import httpStatus from 'http-status';
import dishesServices from "../services/dishes-services.js";
import { Dish } from "../protocols/dishes-types.js";
import errors from "../errors/index.js";

async function createMainDish(req: Request, res: Response, next) {
    try {
        const { name }: { name: string } = req.body
        await dishesServices.registerMainDish(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createSalad(req: Request, res: Response, next) {
    try {
        const { name }: { name: string } = req.body
        await dishesServices.registerSalad(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createAccompaniment(req: Request, res: Response, next) {
    try {
        const { name }: { name: string } = req.body
        await dishesServices.registerAccompaniment(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createDessert(req: Request, res: Response, next) {
    try {
        const { name }: { name: string } = req.body
        await dishesServices.registerDessert(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createDish(req: Request, res: Response, next) {
    try {
        const dish: Dish = req.body
        const worker_id = req.query.worker_id
        if(!worker_id) throw errors.httpsQueryNotGiven("worker_id")
        await dishesServices.registerDish(dish, worker_id)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function deleteDish(req: Request, res: Response, next) {
    try {
        const receivedDate = req.query.date
        if(!receivedDate) throw errors.httpsQueryNotGiven("receivedDate")
        const dateAsList = (receivedDate as string).split("_")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        await dishesServices.removeDish(date)
        res.send(httpStatus.DELETE)
    } catch (err) {
        return next(err);
    }
}

async function deleteMainDish(req: Request, res: Response, next) {
    try {
        const { name } = req.query
        if(!name) throw errors.httpsQueryNotGiven("name")
        await dishesServices.removeMainDish(name as string)
        res.sendStatus(204)
    } catch (err) {
        return next(err);
    }
}

async function deleteSalad(req: Request, res: Response, next) {
    try {
        const { name } = req.query
        if(!name) throw errors.httpsQueryNotGiven("name")
        await dishesServices.removeSalad(name as string)
        res.sendStatus(204)
    } catch (err) {
        return next(err);
    }
}

async function deleteAccompaniment(req: Request, res: Response, next) {
    try {
        const { name } = req.query
        if(!name) throw errors.httpsQueryNotGiven("name")
        await dishesServices.removeAccompaniment(name as string)
        res.sendStatus(204)
    } catch (err) {
        return next(err);
    }
}

async function deleteDessert(req: Request, res: Response, next) {
    try {
        const { name } = req.query
        if(!name) throw errors.httpsQueryNotGiven("name")
        await dishesServices.removeDessert(name as string)
        res.sendStatus(204)
    } catch (err) {
        return next(err);
    }
}

async function updateDishMainDish(req: Request, res: Response, next) {
    try {
        const { chosenDate, name }: {chosenDate: string,name: string} = req.body
        const dateAsList = (chosenDate as string).split("/")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        await dishesServices.alterDishMainDish(date, name)
        res.send(httpStatus.UPDATE)
    } catch (err) {
        return next(err)
    }
}

async function updateDishSalad(req: Request, res: Response, next) {
    try {
        const { chosenDate, name, saladOption }: {chosenDate:string, name:string, saladOption:number}= req.body
        const dateAsList = (chosenDate as string).split("/")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        await dishesServices.alterDishSalad(date, name, saladOption)
        res.send(httpStatus.UPDATE)
    } catch (err) {
        return next(err)
    }
}

async function updateDishAccompaniment(req: Request, res: Response, next) {
    try {
        const { chosenDate, name}: {chosenDate:string, name:string} = req.body
        const dateAsList = (chosenDate as string).split("/")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        await dishesServices.alterDishAccompaniment(date, name)
        res.send(httpStatus.UPDATE)
    } catch (err) {
        return next(err)
    }
}

async function updateDishDessert(req: Request, res: Response, next) {
    try {
        const { chosenDate, name}: {chosenDate:string, name:string} = req.body
        const dateAsList = (chosenDate as string).split("/")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        await dishesServices.alterDishDessert(date, name)
        res.send(httpStatus.UPDATE)
    } catch (err) {
        return next(err)
    }
}

async function getDishByDate(req: Request, res: Response, next){
    try {
        const { chosenDate } = req.query
        if(!chosenDate) throw errors.httpsQueryNotGiven("chosenDate")
        const dateAsList = (chosenDate as string).split("_")
        const day = dateAsList[0]
        const month = dateAsList[1]
        const year = dateAsList[2]
        const date = new Date([year, month, day].join("/"))
        const dish = await dishesServices.findDishByDate(date)
        res.status(httpStatus.OK).send(dish.rows)
    } catch (err) {
        return next(err)
    }
}

export default {
    createMainDish,
    createSalad,
    createAccompaniment,
    createDessert,
    createDish,
    deleteDish,
    deleteMainDish,
    deleteAccompaniment,
    deleteDessert,
    deleteSalad,
    updateDishMainDish,
    updateDishSalad,
    updateDishAccompaniment,
    updateDishDessert,
    getDishByDate
}