const mealsSchema = require("../models/mealsModel");

module.exports.getMeals = (req, res, next) => {
  mealsSchema.find((err, response) => {
    console.log(response);
    if (err) res.send("Exception Occured");
    else res.send(response);
  });
};

module.exports.getMealByName = (req, res, next) => {
  mealsSchema.find({ meal_type: req.query.meal_type }, (err, response) => {
    if (err) res.send("Exception Occured");
    else res.send(response);
  });
};

module.exports.getMealById = (req, res, next) => {
  mealsSchema.findById(req.params.id, (err, response) => {
    if (err) res.send("Exception Occured");
    else res.send(response);
  });
};

module.exports.addMeals = (req, res, next) => {
  var cityToAdd = new mealsSchema({
    meal_type: req.body.meal_type,
    image: req.body.image,
    name: req.body.name,
    content: req.body.content,
  });

  cityToAdd.save((err, response) => {
    if (err) res.send("Exception Occurred");
    else
      res.send({
        status: 200,
        message: "Meal added successfully",
        restaurant: response,
      });
  });
};
