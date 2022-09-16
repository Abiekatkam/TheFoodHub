import React from "react";
import styled from "styled-components";

// import pages
import MenuContentPage from "./MenuContentPage";

function MenuContentVeg({ data }) {
  return (
    <MenuContentSection>
      <div className="wrapper">
        <div id="content">
          <a type="button" className="btn button rounded-0 btn-lg" href="/menu">
            <span>Back to Menu</span>
          </a>
          <h2 className="head2">Best Veggies List for you.</h2>
          <MenuContentPage data={data} />
        </div>
      </div>
    </MenuContentSection>
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

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    color: var(--blue);
    background: var(--lightbs);
  }

  #sidebar ul li.active > a,
  a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
  }
`;

export default MenuContentVeg;
