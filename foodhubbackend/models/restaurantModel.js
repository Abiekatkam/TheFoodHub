import { Schema, model } from "mongoose";

const restaurantSchema = Schema([
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

export default model("restaurants", restaurantSchema);
