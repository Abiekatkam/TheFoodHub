import { Router } from "express";
const router = Router();
import {
  getMeals,
  addMeals,
  getMealById,
  getMealByName,
} from "../controller/mealsController.js";

/* GET users listing. */

router.get("/", getMeals);

router.get("/getMeals", getMeals);

router.get("/getMealByName", getMealByName);

router.get("/getMealById/:id", getMealById);

router.post("/addMeal", addMeals);

export default router;
