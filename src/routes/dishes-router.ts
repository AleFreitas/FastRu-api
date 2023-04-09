import { Router } from "express";
import dishesControllers from "../controllers/dishes-controllers.js";
import { dishComponentSchema, dishSchema, updateDishSchema, updateSaladSchema } from "../schemas/dishes-schemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";
const dishRouter = Router()
 
dishRouter.post("/main_dish", validateSchema(dishComponentSchema), dishesControllers.createMainDish)
dishRouter.post("/salad", validateSchema(dishComponentSchema), dishesControllers.createSalad)
dishRouter.post("/accompaniment", validateSchema(dishComponentSchema), dishesControllers.createAccompaniment)
dishRouter.post("/dessert", validateSchema(dishComponentSchema), dishesControllers.createDessert)
dishRouter.post("/dish", validateSchema(dishSchema), dishesControllers.createDish)

dishRouter.delete("/main_dish", dishesControllers.deleteMainDish)
dishRouter.delete("/salad", dishesControllers.deleteSalad)
dishRouter.delete("/accompaniment", dishesControllers.deleteAccompaniment)
dishRouter.delete("/dessert", dishesControllers.deleteDessert)
dishRouter.delete("/dish",dishesControllers.deleteDish)

dishRouter.put("/dish/main_dish",validateSchema(updateDishSchema), dishesControllers.updateDishMainDish)
dishRouter.put("/dish/salad",validateSchema(updateSaladSchema), dishesControllers.updateDishSalad)
dishRouter.put("/dish/accompaniment",validateSchema(updateDishSchema), dishesControllers.updateDishAccompaniment)
dishRouter.put("/dish/dessert",validateSchema(updateDishSchema), dishesControllers.updateDishDessert)

dishRouter.get("/dish", dishesControllers.getDishByDate)


export default dishRouter;