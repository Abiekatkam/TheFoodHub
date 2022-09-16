import React from "react";
import styled from "styled-components";

function CitDetailTab({ desc, contact, address, cuisine, price }) {
  return (
    <MainSection>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="description"
            data-bs-toggle="tab"
            data-bs-target="#description-tab-pane"
            type="button"
            role="tab"
            aria-controls="description-tab-pane"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contacts-tab"
            data-bs-toggle="tab"
            data-bs-target="#contacts-tab-pane"
            type="button"
            role="tab"
            aria-controls="contacts-tab-pane"
            aria-selected="false"
          >
            Contacts Details
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active tab-concent"
          id="description-tab-pane"
          role="tabpanel"
          aria-labelledby="description-tab"
          tabIndex="0"
        >
          {desc}
        </div>
        <div
          className="tab-pane fade"
          id="contacts-tab-pane"
          role="tabpanel"
          aria-labelledby="contacts-tab"
          tabIndex="0"
        >
          <div className="tab-concent">
            Price : {price}Rs <br />
            Cuisine : {cuisine} <br />
            Address : {address} <br />
            Contact : {contact}
          </div>
        </div>
      </div>
    </MainSection>
  );
}

const MainSection = styled.section`
  width: 100%;

  .tab-concent {
    width: 100%;
    padding: 1.5rem 2rem 2rem 0;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .nav-tabs {
    border-radius: 0;
    outline: none;
    width: 100%;
  }

  .nav-tabs .nav-link {
    background-color: var(--light-white);
  }

  .nav-tabs .nav-link.active {
    background-color: var(--light-white);
    border: 0;
    outline: none;
    border-bottom: 2px solid var(--green);
    color: black;
  }

  .nav-tabs .nav-link:hover {
    color: #273e47;
  }

  .nav-item {
    border: 0;
    outline: none;
    background-color: var(--light-white);
  }

  .nav-link {
    border: 0;
    margin-right: 1rem;
    outline: none;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: var(--ls);
    color: #777;
  }

  .nav-link:hover {
    outline: none;
    border: 0;
  }
  .nav-link:focus {
    outline: none;
    border: 0;
  }

  .tab-content {
    min-height: 220px;
  }
`;

export default CitDetailTab;
