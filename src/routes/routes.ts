import { Router } from "express";
import { getAllMyCattle, getSelectedCattle, insertANewCattle, updateCattlePiquete } from "../controllers/controller.js";

const mainRoutes = Router()

mainRoutes
  .get("/all", getAllMyCattle)
  .get("/cattle/:piquete", getSelectedCattle)
  .post("/cattle", insertANewCattle)
  .post("/cattle/:piquete", updateCattlePiquete)
export { mainRoutes };

