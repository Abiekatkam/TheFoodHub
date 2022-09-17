import React from "react";
import axios from "axios";

import { mealRouteName } from "../utils/DataImport";
import Header from "./Header";
import Footer from "./Footer";
import MenuContentNon from "../components/MealContentNon";
import { useState } from "react";
import { useEffect } from "react";

function MealTypeNonPage() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(`${mealRouteName}Chicken&mealType=Mutton`);
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
      <MenuContentNon data={data} />
      <Footer />
    </>
  );
}

export default MealTypeNonPage;
