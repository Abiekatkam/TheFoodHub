import React from "react";

// import Pages
import Header from "./Header";
import HomeBackground from "../components/HomeBackground";
import HomeQuickSearch from "../components/HomeQuickSearch";
import HomeQuickCities from "../components/HomeQuickCities";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Header />
      <HomeBackground />
      <HomeQuickSearch />
      <HomeQuickCities />
      <Footer />
    </>
  );
}

export default HomePage;
