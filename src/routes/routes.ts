import { Router } from "express";
import { getAllMyCattle } from "../controllers/controller.js";

const mainRoutes = Router()

mainRoutes.get("/all", getAllMyCattle)
mainRoutes.get("/cattle/:piquete", getAllMyCattle)
export { mainRoutes };

