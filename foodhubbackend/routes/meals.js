import { Router } from "express";
const router = Router();
import {
  getMeals,
  addMeals,
  getMealById,
  getMealByName,
} from "../controller/mealsController";

/* GET users listing. */

router.get("/", function (req, res, next) {
  getMeals(req, res, next);
});

router.get("/getMeals", function (req, res, next) {
  getMeals(req, res, next);
});

router.get("/getMealByName", function (req, res, next) {
  getMealByName(req, res, next);
});

router.get("/getMealById/:id", function (req, res, next) {
  getMealById(req, res, next);
});

router.post("/addMeal", function (req, res, next) {
  addMeals(req, res, next);
});

export default router;
