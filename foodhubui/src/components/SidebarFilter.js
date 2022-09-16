import React from "react";
import styled from "styled-components";

function SidebarFilter() {
  return (
    <FilterSection>
      <ul className="list-unstyled components">
        <li>
          <h5>City</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Mumbai
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Delhi
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Chennai
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label class="form-check-label" for="flexRadioDefault4">
              Bangalore
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault5"
            />
            <label class="form-check-label" for="flexRadioDefault5">
              Pune
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault6"
            />
            <label class="form-check-label" for="flexRadioDefault6">
              Hyderabad
            </label>
          </div>
        </li>

        <li>
          <h5>Cuisine</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label class="form-check-label" for="defaultCheck1">
              Indian
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label class="form-check-label" for="defaultCheck2">
              Italian
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck3"
            />
            <label class="form-check-label" for="defaultCheck3">
              Mexican
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck4"
            />
            <label class="form-check-label" for="defaultCheck4">
              Chinese
            </label>
          </div>
        </li>

        <li>
          <h5>Price</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck5"
            />
            <label class="form-check-label" for="defaultCheck5">
              4000 - 4500
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck6"
            />
            <label class="form-check-label" for="defaultCheck6">
              3000 - 4000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck7"
            />
            <label class="form-check-label" for="defaultCheck7">
              2000 - 3000
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck8"
            />
            <label class="form-check-label" for="defaultCheck8">
              1000 - 2000
            </label>
          </div>
        </li>
      </ul>
      <button className="btn btn-lg w-75 btn-success "> Submit </button>
    </FilterSection>
  );
}

const FilterSection = styled.section``;

export default SidebarFilter;
