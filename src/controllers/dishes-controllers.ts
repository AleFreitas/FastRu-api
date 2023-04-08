import { Request, Response } from "express";
import httpStatus from 'http-status';
import dishesServices from "../services/dishes-services.js";

async function createMainDish(req: Request, res: Response, next){
    try{
        const {name}:{name:string}  = req.body
        await dishesServices.registerMainDish(name)
        res.send(httpStatus.CREATED)
    } catch (err) {
        return next(err);
    }
}

export default {createMainDish}