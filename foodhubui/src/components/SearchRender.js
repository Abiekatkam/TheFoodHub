import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// data import
import { cityRoute } from "../utils/DataImport";

function SearchRender({ data }) {
  const [dataM, setDataM] = useState([]);

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(
        `${cityRoute}/getRestaurantByName?city=${data}`
      );
      setDataM(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <SectionStyled>
      <div className="input-group mb-3 input-group-lg  ">
        <a
          href="/city"
          type="button"
          className="input-group-text rounded-0 btn btn-success"
        >
          Search
        </a>
        <input
          type="text"
          className="form-control rounded-0"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search for restaurant, cafe and bars."
        />
      </div>
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  .form-control:focus {
    border: 0;
    outline: 0;
    box-shadow: none;
  }

  .btn:focus {
    border: 0;
    outline: 0;
    box-shadow: none;
  }
`;

export default SearchRender;
