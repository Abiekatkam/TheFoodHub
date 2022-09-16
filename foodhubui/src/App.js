import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports pages
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CityRestaurantPage from "./pages/CityRestaurantPage";
import LoginUserPage from "./pages/LoginUserPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import MealsDetailPage from "./pages/MealsDetailPage";
import CityDetailsPage from "./pages/CityDetailsPage";
import MealTypeSnacksPage from "./pages/MealTypeSnacksPage";
import MealTypeNonPage from "./pages/MealTypeNonPage";
import MealTypeVegPage from "./pages/MealTypeVegPage";
import MealTypeSeafoodPage from "./pages/MealTypeSeafoodPage";
import CityMumPage from "./pages/CityMumPage";
import CityDelPage from "./pages/CityDelPage";
import CityChenPage from "./pages/CityChenPage";
import CityHydPage from "./pages/CityHydPage";
import CityPunPage from "./pages/CityPunPage";
import CityBanPage from "./pages/CityBanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/login" element={<LoginUserPage />} />
        <Route exact path="/register" element={<RegisterUserPage />} />
        <Route exact path="/menu" element={<MenuPage />} />
        <Route exact path="/menu/:id" element={<MealsDetailPage />} />
        <Route exact path="/menu/snacks" element={<MealTypeSnacksPage />} />
        <Route exact path="/menu/nonveg" element={<MealTypeNonPage />} />
        <Route exact path="/menu/veg" element={<MealTypeVegPage />} />
        <Route exact path="/menu/seafood" element={<MealTypeSeafoodPage />} />
        <Route exact path="/city" element={<CityRestaurantPage />} />
        <Route exact path="/city/Mumbai" element={<CityMumPage />} />
        <Route exact path="/city/Delhi" element={<CityDelPage />} />
        <Route exact path="/city/Chennai" element={<CityChenPage />} />
        <Route exact path="/city/Hyderabad" element={<CityHydPage />} />
        <Route exact path="/city/Pune" element={<CityPunPage />} />
        <Route exact path="/city/Bangalore" element={<CityBanPage />} />
        <Route exact path="/city/:id" element={<CityDetailsPage />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
