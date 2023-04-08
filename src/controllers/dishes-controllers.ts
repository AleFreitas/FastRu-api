import { Request, Response } from "express";
import httpStatus from 'http-status';
import dishesServices from "../services/dishes-services.js";

async function createMainDish(req: Request, res: Response, next){
    try{
        const {name}:{name:string}  = req.body
        await dishesServices.registerMainDish(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createSalad(req: Request, res: Response, next){
    try{
        const {name}:{name:string}  = req.body
        await dishesServices.registerSalad(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createAccompaniment(req: Request, res: Response, next){
    try{
        const {name}:{name:string}  = req.body
        await dishesServices.registerAccompaniment(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

async function createDessert(req: Request, res: Response, next){
    try{
        const {name}:{name:string}  = req.body
        await dishesServices.registerDessert(name)
        res.sendStatus(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}


export default {
    createMainDish, 
    createSalad,
    createAccompaniment,
    createDessert
}