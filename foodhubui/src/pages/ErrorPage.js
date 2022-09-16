import React from "react";
import ErrorSVG from "../components/ErrorSVG";
import ErrorContent from "../components/ErrorContent";
import styled from "styled-components";

function ErrorPage() {
  return (
    <ErrorPageSection>
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center">
            <ErrorSVG />
          </div>
          <div class="col-md-6 align-self-center">
            <ErrorContent />
          </div>
        </div>
      </div>
    </ErrorPageSection>
  );
}

const ErrorPageSection = styled.section`
  display: flex;
  background-color: #edf2f4;
  align-items: center;
  justify-content: center;
  font-family: var(--ls);
  color: var(--blue);
  font-size: 1em;
  height: 100vh;
  margin-bottom: 0;

  svg {
    width: 100%;
  }
  h1 {
    font-size: 7.5em;
    margin: 15px 0px;
    font-weight: bold;
  }
  h2 {
    font-weight: bold;
  }

  .btn {
    overflow: hidden;
    background: transparent;
    padding: 8px 50px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 2px;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
    margin: 5px 0px;
    border: 3px solid black;
    color: black;
  }

  .btn:hover {
    color: white;
    background-color: #444;
    border: 2px solid white;
  }
`;

export default ErrorPage;
