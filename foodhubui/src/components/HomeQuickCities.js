import React from "react";
import styled from "styled-components";

// images
import Mumbai from "../assets/mumbai.png";
import Delhi from "../assets/delhi.png";
import Chennai from "../assets/chennai.png";

function HomeQuickCities() {
  return (
    <QuickCities>
      <div className="container py-5">
        <h3 className="head3">Restaurants in Famous Cities</h3>
        <div className="row">
          <div className="col-md">
            <a href="/city/Mumbai" class="card mx-auto">
              <img src={Mumbai} class="card-img-top" alt="mumbai" />
              <div class="card-body">
                <p class="card-title">Best Places in Mumbai.</p>
              </div>
            </a>
          </div>

          <div className="col-md">
            <a href="/city/Delhi" class="card mx-auto">
              <img src={Delhi} class="card-img-top" alt="mumbai" />
              <div class="card-body">
                <p class="card-title">Best Places in Delhi.</p>
              </div>
            </a>
          </div>

          <div className="col-md">
            <a href="/city/Chennai" class="card mx-auto">
              <img src={Chennai} class="card-img-top" alt="mumbai" />
              <div class="card-body">
                <p class="card-title">Best Places in Chennai.</p>
              </div>
            </a>
          </div>
        </div>

        <a href="/city" className="btn btn-lg rounded-0 btn-dark">
          View more cities
        </a>
      </div>
    </QuickCities>
  );
}

const QuickCities = styled.section`
  width: 100%;
  min-height: 500px;
  max-height: 600px;
  background: var(--light-white);
  text-align: center;

  .card {
    background: var(--light-white);
    min-height: 350px;
    width: 90%;
    padding: 1rem;
    margin: 1.5rem 0;
  }

  .card-img-top {
    height: 240px;
  }

  .card-title {
    font-size: 1.4rem;
    color: var(--blue);
    font-family: var(--pd);
    font-weight: 500;
  }

  .card:hover {
    border: 2px solid var(--blue);

    .card-title {
      color: var(--yellows);
    }
  }
`;

export default HomeQuickCities;
