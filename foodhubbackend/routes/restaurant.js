const express = require("express");
const router = express.Router();
const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
  addRestaurant,
} = require("../controller/restaurantController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  getRestaurants(req, res, next);
});

router.get("/getRestaurants", function (req, res, next) {
  getRestaurants(req, res, next);
});

router.get("/getRestaurantByName", function (req, res, next) {
  getRestaurantByName(req, res, next);
});

router.get("/getRestaurantById/:id", function (req, res, next) {
  getRestaurantById(req, res, next);
});

router.post("/addRestaurant", function (req, res, next) {
  addRestaurant(req, res, next);
});

module.exports = router;
