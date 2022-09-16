import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <h6>@{new Date().getFullYear()} Copyright issue by AbieKatkam</h6>
    </FooterStyled>
  );
}

const FooterStyled = styled.section`
  height: 10vh;
  padding: 3rem 0;
  text-align: center;
  color: #999;
  font-size: 1rem;
  background: var(--blue);
`;

export default Footer;
