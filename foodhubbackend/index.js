const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const titleRoute = require("./routes/title");
const authRoutes = require("./routes/auth");
const restaurantRoutes = require("./routes/restaurant");
const mealsRoutes = require("./routes/meals").default;

const app = express();
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static(path.join(__dirname, "public")));

// Routing configures
app.use("/", titleRoute);
app.use("/api/auth", authRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/meals", mealsRoutes);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, "build")));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
