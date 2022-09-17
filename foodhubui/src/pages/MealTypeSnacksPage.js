import React from "react";
import axios from "axios";

import { mealRouteName } from "../utils/DataImport";
import MenuContentSnacks from "../components/MenuContentSnacks";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useEffect } from "react";

function MealTypeSnacksPage() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(`${mealRouteName}Snacks`);
      setData(response.data.mealName);
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
      <MenuContentSnacks data={data} />
      <Footer />
    </>
  );
}

export default MealTypeSnacksPage;
