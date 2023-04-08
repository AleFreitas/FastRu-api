import { Router } from "express";
import dishesControllers from "../controllers/dishes-controllers.js";
import { dishComponentSchema } from "../schemas/dishes-schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";
const dishRouter = Router()
 
dishRouter.post("/main_dish", validateSchema(dishComponentSchema), dishesControllers.createMainDish)
dishRouter.post("/salad", validateSchema(dishComponentSchema), dishesControllers.createSalad)


export default dishRouter;