import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderSection>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            The Food Hub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="/menu">
                  Menu
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="/city">
                  City Restaurant
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="/register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderSection>
  );
}

const HeaderSection = styled.section`
  .navbar {
    background: var(--blue);
  }

  .navbar-brand {
    font-size: 1.4rem;
    font-weight: 600;
    font-family: var(--ls);
  }

  .navbar-nav {
    font-size: 1.15rem;
    font-family: var(--pd);
  }

  .navbar-nav .nav-item .nav-link {
    color: #aaa;
  }

  .navbar-nav .nav-item .nav-link:hover {
    color: #a8dadc;
  }
`;

export default Header;
