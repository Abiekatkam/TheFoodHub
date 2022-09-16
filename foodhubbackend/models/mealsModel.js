var mongoose = require("mongoose");

const mealsSchema = mongoose.Schema([
  {
    meal_type: String,
    image: String,
    name: String,
    content: String,
  },
]);

module.exports = mongoose.model("meals", mealsSchema);
