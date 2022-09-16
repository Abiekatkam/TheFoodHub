import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import HomeImage from "../assets/HomeImage.jpg";
import SearchRender from "./SearchRender";
import SearchSelect from "./SearchSelect";

// data import
import { cityRoute } from "../utils/DataImport";

function HomeBackground() {
  // styling factor
  const divStyle = {
    backgroundImage: `url(${HomeImage})`,
  };

  // datas
  const [data, setData] = useState([]);
  const [dataSet, setDataSet] = useState([]);

  // Event handlers
  const HandleChange = (e) => {
    const location = e.target.value;
    setDataSet(location);
  };

  const fetchData = async () => {
    try {
      const response = await axios(cityRoute);
      const user = response.data;
      const userData = [];
      for (let i = 0; i < user.length; i++) {
        userData.push(user[i].city);
      }
      const userDatas = userData.filter((c, i) => userData.indexOf(c) === i);
      setData(userDatas);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BackgroundSection>
      <div className="banner-container" style={divStyle}>
        <div className="page-container mx-auto">
          <h1 className="fw-bold display-3">The Food Hub</h1>
          <h5 className="head5 py-1">
            Find the best restaurants, cafes and bar near by you.
          </h5>

          <div className="row g-3 py-3">
            <div className="col-md-4">
              <SearchSelect data={data} HandleChange={HandleChange} />
            </div>
            <div className="col-md-8">
              <SearchRender data={dataSet} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
}

const BackgroundSection = styled.section`
  width: 100%;
  max-height: 550px;
  border-bottom: 1px solid #222;
  color: #fff;
  ${"" /* font-family: "Lora", serif; */}

  .banner-container {
    background-attachment: fixed;
    box-shadow: inset 0 0 0 2000px #1c1c1c7a;
    text-align: center;
    padding: 90px 15px;
  }

  .head5 {
    font-size: 1.8rem;
  }

  .page-container {
    width: 50%;
  }
`;

export default HomeBackground;
