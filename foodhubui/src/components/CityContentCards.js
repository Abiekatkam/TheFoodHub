import React, { useState, useEffect } from "react";
import axios from "axios";

import CityContentPage from "./CityContentPage";

// import data
import { cityRoute } from "../utils/DataImport";
import styled from "styled-components";

function CityContentCards() {
  const [data, setData] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(cityRoute);
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
      <h2 className="head2">Best Restaurant List for you.</h2>
      <div className="container">
        <div className="card-displayer row">
          <div className="meal-card-container col-md">
            <a href="/city/Mumbai">
              <div className="meal-card rounded-1" title="Mumbai" name="Mumbai">
                <h6 className="head6">Mumbai</h6>
              </div>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/city/Delhi">
              <div className="meal-card rounded-1" title="Delhi" name="Delhi">
                <h6 className="head6">Delhi</h6>
              </div>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/city/Chennai">
              <div
                className="meal-card rounded-1"
                title="Chennai"
                name="Chennai"
              >
                <h6 className="head6">Chennai</h6>
              </div>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/city/Bangalore">
              <div
                className="meal-card rounded-1"
                title="Bangalore"
                name="Bangalore"
              >
                <h6 className="head6">Bangalore</h6>
              </div>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/city/Pune">
              <div className="meal-card rounded-1" title="Pune" name="Pune">
                <h6 className="head6">Pune</h6>
              </div>
            </a>
          </div>

          <div className="meal-card-container col-md">
            <a href="/city/Hyderabad">
              <div
                className="meal-card rounded-1"
                title="Hyderabad"
                name="Hyderabad"
              >
                <h6 className="head6">Hyderabad</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
      <CityContentPage data={data} />
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
    padding: 20px;
  }

  .meal-card:focus,
  .meal-card:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.5), 0 4px 15px 0 rgba(0, 0, 0, 0.6);
  }

  .meal-img {
    height: 70px;
    width: 70px;
  }

  .head6 {
    margin: 0.7rem;
    font-size: 1.3rem;
    color: var(--blue);
    font-family: var(--ls);
  }
`;

export default CityContentCards;
