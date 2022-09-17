import mealsSchema from "../models/mealsModel.js";

export const getMeals = async (req, res, next) => {
  // mealsSchema.find((err, response) => {
  //   console.log(response);
  //   if (err) res.send("Exception Occured");
  //   else res.send(response);
  // });
  try {
    const getMealsDetail = await mealsSchema.find();
    res.status(200).json(getMealsDetail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMealByName = async (req, res, next) => {
  try {
    const mealName = await mealsSchema.find({ mealType: req.query.mealType });
    res.status(200).json({ mealName });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMealById = async (req, res, next) => {
  try {
    const mealsID = mealsSchema.findById(req.params.id);
    res.status(200).json({ mealsID });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addMeals = (req, res, next) => {
  var cityToAdd = new mealsSchema({
    mealType: req.body.mealType,
    image: req.body.image,
    name: req.body.name,
    content: req.body.content,
  });

  cityToAdd.save((err, response) => {
    if (err) res.send("Exception Occurred");
    else
      res.json({
        status: 200,
        message: "Meal added successfully",
        restaurant: response,
      });
  });
};
