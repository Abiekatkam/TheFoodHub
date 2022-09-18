import React from "react";
import axios from "axios";

import { mealRouteName } from "../utils/DataImport";
import Header from "./Header";
import Footer from "./Footer";
import MenuContentSea from "../components/MenucontentSea";
import { useState } from "react";
import { useEffect } from "react";

function MealTypeSeafoodPage() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(`${mealRouteName}Seafood`);
      setData(response.data);
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
      <MenuContentSea data={data} />
      <Footer />
    </>
  );
}

export default MealTypeSeafoodPage;
