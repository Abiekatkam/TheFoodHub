const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([
  {
    name: String,
    description: String,
    address: String,
    location: String,
    image: String,
    cuisine: String,
    price: String,
    contact: String,
    city: String,
    imageFood: [],
  },
]);

module.exports = mongoose.model("restaurants", restaurantSchema);
