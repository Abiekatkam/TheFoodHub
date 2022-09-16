import React, { useState, useEffect } from "react";
import axios from "axios";

// import pages
import MenuContentPage from "../components/MenuContentPage";

// images
import Snacks from "../assets/snacks.png";
import NonVeg from "../assets/chicken.png";
import Veg from "../assets/veggie.png";
import Seafood from "../assets/seafood.png";

// import data
import { mealsRoute } from "../utils/DataImport";
import styled from "styled-components";

function MenuContentCards() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(mealsRoute);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SectionPage>
      <h2 className="head2"> Categories.</h2>
      <div className="container">
        <div className="card-displayer row">
          <div className="meal-card-container col-md">
            <a href="/menu/snacks">
              <div
                className="meal-card rounded-circle"
                title="snacks"
                name="snacks"
              >
                <img src={Snacks} className="meal-img" alt="cardsdetails" />
              </div>
              <h6 className="head6">Snacks</h6>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/menu/nonveg">
              <div className="meal-card rounded-circle" title="Non-veg">
                <img src={NonVeg} className="meal-img" alt="cardsdetails" />
              </div>
              <h6 className="head6">Non-Veg</h6>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/menu/veg">
              <div className="meal-card rounded-circle" title="veggies">
                <img src={Veg} className="meal-img" alt="cardsdetails" />
              </div>
              <h6 className="head6">Veg</h6>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/menu/seafood">
              <div className="meal-card rounded-circle" title="seafood">
                <img src={Seafood} className="meal-img" alt="cardsdetails" />
              </div>
              <h6 className="head6">SeaFood</h6>
            </a>
          </div>
        </div>
      </div>
      <h2 className="head2">Menu List for you.</h2>
      <MenuContentPage data={data} />
    </SectionPage>
  );
}

const SectionPage = styled.section`
  .head2 {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 2rem;
    text-decoration: underline;
    font-family: var(--ls);
  }
  .card-displayer {
    display: flex;
    flex-wrap: nowrap;
  }

  .meal-card-container {
    text-align: center;
    margin-top: 10px;
  }

  .meal-card-container a {
    text-decoration: none;
  }

  .meal-card {
    background-color: var(--light-white);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    display: inline-block;
    padding: 25px;
  }

  .meal-card:focus,
  .meal-card:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.5), 0 4px 15px 0 rgba(0, 0, 0, 0.6);
  }

  .meal-img {
    height: 80px;
    width: 80px;
  }

  .head6 {
    margin: 0.7rem;
    font-size: 1.3rem;
    color: var(--blue);
  }
`;

export default MenuContentCards;
