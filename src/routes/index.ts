import { Router } from "express";
import dishRouter from "./dishes-router.js";

const routes = Router()
routes.use(dishRouter)

export default routes