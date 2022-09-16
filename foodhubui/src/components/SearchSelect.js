import React from "react";
import styled from "styled-components";

function SearchSelect({ data, HandleChange }) {
  return (
    <SectionStyled>
      <select
        className="form-select form-select-lg mb-3 rounded-0"
        aria-label=".form-select-lg example"
        onChange={HandleChange}
      >
        <option defaultValue="0">Select city</option>
        {data.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  .form-select:focus {
    border: 0;
    outline: 0;
    box-shadow: none;
  }
`;

export default SearchSelect;
