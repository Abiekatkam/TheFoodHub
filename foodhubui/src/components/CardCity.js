import React from "react";
import styled from "styled-components";

function CardCity({ name, city, img, cuisine, id }) {
  return (
    <CardsSection>
      <a href={`/city/${id}`} className="card col-md">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`City ${city}, Cuisine ${cuisine}`}</p>
        </div>
      </a>
    </CardsSection>
  );
}

const CardsSection = styled.section`
  min-height: 300px;
  padding: 0 1rem;
  text-align: center;

  .card {
    margin-top: 2rem;
    width: 380px;
    height: 380px;
    background-color: var(--light-white);
  }

  .card:hover {
    border: 3px solid var(--blue);

    .card-img-top {
      border: 0;
      outline: none;
    }

    .card-text,
    .card-title {
      color: var(--yellows);
    }
  }

  .card-img-top {
    width: 100%;
    height: 73%;
  }

  .card-title {
    font-size: 1.3rem;
    color: var(--blue);
    font-family: var(--pd);
    font-weight: 700;
  }

  .card-text {
    font-size: 1rem;
    color: var(--blue);
    font-family: var(--pd);
    font-weight: bold;
  }
`;

export default CardCity;
