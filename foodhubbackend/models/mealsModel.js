import { Schema, model } from "mongoose";

const mealsSchema = Schema([
  {
    mealType: String,
    image: String,
    name: String,
    content: String,
  },
]);

export default model("meals", mealsSchema);
