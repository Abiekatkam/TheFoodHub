import { Router } from "express";
const router = Router();
import {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
  addRestaurant,
} from "../controller/restaurantController.js";

/* GET users listing. */
router.get("/", getRestaurants);

router.get("/getRestaurants", getRestaurants);

router.get("/getRestaurantByName", getRestaurantByName);

router.get("/getRestaurantById/:id", getRestaurantById);

router.post("/addRestaurant", addRestaurant);

export default router;
