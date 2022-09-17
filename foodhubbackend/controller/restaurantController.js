import restaurantSchema from "../models/restaurantModel.js";

export const getRestaurants = async (req, res, next) => {
  // find((err, response) => {
  //   if (err) res.send("Exception Occured");
  //   else
  //     res.send({
  //       status: 200,
  //       message: "Get All restaurant data",
  //       data: response,
  //     });
  // });

  try {
    const getRestaurantsDetail = await restaurantSchema.find();
    res.status(200).json(getRestaurantsDetail);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRestaurantByName = async (req, res, next) => {
  try {
    const resName = await restaurantSchema.find({ city: req.query.city });
    res.status(200).json(resName);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRestaurantById = async (req, res, next) => {
  try {
    const resId = await restaurantSchema.findById(req.params.id);
    res.status(200).json(resId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addRestaurant = (req, res, next) => {
  const restautantsToAdd = new restaurantSchema({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    location: req.body.location,
    image: req.body.image,
    cuisine: req.body.cuisine,
    price: req.body.min_price,
    contact: req.body.contact,
    city: req.body.city,
    imageFood: req.body.imageFood,
  });

  restautantsToAdd.save((err, response) => {
    if (err) res.send("Exception Occurred");
    else
      res.json({
        status: 200,
        message: "Restaurant added successfully",
        restaurant: response,
      });
  });
};
