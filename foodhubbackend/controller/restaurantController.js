const restaurantSchema = require("../models/restaurantModel");

module.exports.getRestaurants = (req, res, next) => {
  restaurantSchema.find((err, response) => {
    if (err) res.send("Exception Occured");
    else
      res.send({
        status: 200,
        message: "Get All restaurant data",
        data: response,
      });
  });
};

module.exports.getRestaurantByName = (req, res, next) => {
  restaurantSchema.find({ city: req.query.city }, (err, response) => {
    if (err) res.send("Exception Occured");
    else res.send(response);
  });
};

module.exports.getRestaurantById = (req, res, next) => {
  restaurantSchema.findById(req.params.id, (err, response) => {
    if (err) res.send("Exception Occured");
    else res.send(response);
  });
};

module.exports.addRestaurant = (req, res, next) => {
  var restautantsToAdd = new restaurantSchema({
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
      res.send({
        status: 200,
        message: "Restaurant added successfully",
        restaurant: response,
      });
  });
};
