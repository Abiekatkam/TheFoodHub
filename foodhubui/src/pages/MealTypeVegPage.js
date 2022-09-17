import React from "react";
import axios from "axios";

import { mealRouteName } from "../utils/DataImport";
import Header from "./Header";
import MenuContentVeg from "../components/MealContentVeg";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

function MealTypeVegPage() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(`${mealRouteName}Veg`);
      setData(response.data.mealName);
      console.log(response.data.mealName);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <MenuContentVeg data={data} />
      <Footer />
    </>
  );
}

export default MealTypeVegPage;
