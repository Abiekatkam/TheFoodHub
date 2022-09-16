import React from "react";
import styled from "styled-components";

// images
import Snacks from "../assets/snacks.png";
import NonVeg from "../assets/chicken.png";
import Veg from "../assets/veggie.png";
import Seafood from "../assets/seafood.png";

function HomeQuickSearch() {
  return (
    <QuickSearch>
      <div className="container py-4 ">
        <h3 className="head3">QuickSearch</h3>
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
    </QuickSearch>
  );
}

const QuickSearch = styled.section`
  width: 100%;
  min-height: 400px;
  max-height: auto;
  background: var(--light-white);

  .card-displayer {
    display: flex;
    flex-wrap: nowrap;
  }

  .meal-card-container {
    text-align: center;
    margin-top: 30px;
  }

  .meal-card-container a {
    text-decoration: none;
  }

  .meal-card {
    background-color: var(--light-white);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    display: inline-block;
    padding: 35px;
  }

  .meal-card:focus,
  .meal-card:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.5), 0 4px 15px 0 rgba(0, 0, 0, 0.6);
  }

  .meal-img {
    height: 100px;
    width: 100px;
  }

  .head6 {
    margin: 0.7rem;
    font-size: 1.3rem;
    color: var(--blue);
  }
`;

export default HomeQuickSearch;
