import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cityRouteId } from "../utils/DataImport";

import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CitDetailTab from "../components/CitDetailTab";

function CityDetailsPage() {
  const { id } = useParams();
  const [dataVar, setDataVar] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(`${cityRouteId}/${id}`);
      const data = response.data;
      setDataVar(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(dataVar.imageFood);
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <Header />
      <CityStyled>
        <a
          href="/city"
          type="button"
          className="btn button rounded-0 btn-lg m-3 border-3"
        >
          Back to menu
        </a>
        <div className="container col-xxl-8 px-4 py-0">
          <div className="row flex-lg-row-reverse align-items-start g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={dataVar.image}
                className="images d-block mx-lg-auto img-fluid"
                alt="Themes"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">{dataVar.name}</h1>
              <p className="lead">{dataVar.city}</p>
              <p className="lead">{dataVar.price}Rs for two person</p>
              <CitDetailTab
                desc={dataVar.description}
                address={dataVar.address}
                contact={dataVar.contact}
                cuisine={dataVar.cuisine}
                price={dataVar.price}
              />
            </div>
          </div>
        </div>
      </CityStyled>
      <Footer />
    </>
  );
}

const CityStyled = styled.section`
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

export default CityDetailsPage;
