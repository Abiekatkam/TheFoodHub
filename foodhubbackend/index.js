import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import logger from "morgan";

import titleRoute from "./routes/title.js";
import authRoutes from "./routes/auth.js";
import restaurantRoutes from "./routes/restaurant.js";
import mealsRoutes from "./routes/meals.js";

const app = express();

// const MONGO_URL =
//   "mongodb+srv://AbieKatkam:9117abie@thefoodhubcluster.caabn4k.mongodb.net/foodhubDB";

//   const zyx = "mongodb+srv://AbieKatkam:9117abie@foodmaniaclusters.imjlhg9.mongodb.net/?retryWrites=true&w=majority"

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

// app.set("views", join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

// Routing configures
app.use("/", titleRoute);
app.use("/api/auth", authRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/meals", mealsRoutes);

// if (process.env.NODE_ENV === "production") {
//   // Exprees will serve up production assets

//   // Express serve up index.html file if it doesn't recognize route
//   app.get("*", (req, res) => {
//     res.sendFile(join(__dirname, "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
