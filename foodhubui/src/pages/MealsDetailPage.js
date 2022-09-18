import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { mealRouteId } from "../utils/DataImport";

import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function MealsDetailPage() {
  const { id } = useParams();
  const [dataVar, setDataVar] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(`${mealRouteId}/${id}`);
      const data = response.data;
      setDataVar(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <Header />
      <SectionDetail>
        <a
          href="/menu"
          type="button"
          className="btn button rounded-0 btn-lg m-3 border-3"
        >
          Back to menu
        </a>
        <div className="container col-xxl-8 px-4 py-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={dataVar.image}
                className="images d-block mx-lg-auto img-fluid"
                alt="Images"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">{dataVar.name}</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </SectionDetail>
      <Footer />
    </>
  );
}

const SectionDetail = styled.section`
  background: var(--light-white);
  min-height: 557px;
  max-height: auto;

  .images {
    width: 700px;
    min-height: 300px;
    max-height: 450px;
  }

  .button {
    background: var(--blue);
    color: var(--light-white);
  }
`;

export default MealsDetailPage;
