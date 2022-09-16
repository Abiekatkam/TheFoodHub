import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

// imports pages
import Header from "./Header";
import Footer from "./Footer";
import { cityRouteName } from "../utils/DataImport";
import CityContentPage from "../components/CityContentPage";
import SidebarFilter from "../components/SidebarFilter";

function CityMumPage() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  // data import
  const fetchData = async () => {
    try {
      const response = await axios(`${cityRouteName}Mumbai`);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <MenuContentSection>
        <div className="wrapper">
          {active && (
            <nav id="sidebar">
              <div>
                <h3 className="sidebar-header">Where your mood goes?</h3>
                <a
                  href="/"
                  type="button"
                  className="btn button rounded-0 btn-lg"
                >
                  <span>Back to HomePage</span>
                </a>
              </div>

              <SidebarFilter />
            </nav>
          )}

          <div id="content">
            <div className=" d-flex">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn button rounded-0 btn-lg"
                onClick={handleToggle}
              >
                <span>Filter Options</span>
              </button>
              <a
                type="button"
                className="btn button rounded-0 btn-lg mx-2"
                href="/city"
              >
                <span>City Restaurant</span>
              </a>
            </div>
            <h2 className="head2">Best Restaurant List in Mumbai City.</h2>
            <CityContentPage data={data} />
          </div>
        </div>
      </MenuContentSection>
      <Footer />
    </>
  );
}

const MenuContentSection = styled.section`
  background: var(--light-white);

  .head2 {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 2rem;
    text-decoration: underline;
    font-family: var(--ls);
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  .button {
    background: var(--blue);
    color: var(--light-white);
  }

  .button:focus {
    box-shadow: 0;
  }

  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  #sidebar {
    min-width: 300px;
    max-width: 300px;
    background: var(--blue);
    color: #fff;
    padding-left: 0.6rem;
    transition: all 0.3s;
  }

  #sidebar .sidebar-header {
    padding: 20px 20px 0 20px;
    background: var(--blue);
    font-size: 2.3rem;
    font-family: var(--ls);
  }

  #sidebar ul.components {
    padding: 20px 0;
    ${"" /* border-bottom: 1px solid var(--lightbs); */}
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  ${
    "" /* ul ul li {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  } */
  }

  #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
  }
`;

export default CityMumPage;
