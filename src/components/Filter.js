import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useGlobalContext } from "../context";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter() {
  const { isDropDownOpen, setIsDropDownOpen, filterText, setFilterText } =
    useGlobalContext();

  return (
    <Wrapper>
      <FilterContainer onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
        {filterText ? filterText : "Filter By Region"}
        <RiArrowDropDownLine className="icon" />
      </FilterContainer>
      {isDropDownOpen && (
        <FilterListContainer
          text={setFilterText}
          toggle={setIsDropDownOpen}
          close={isDropDownOpen}
        />
      )}
    </Wrapper>
  );
}

export default Filter;

const FilterListContainer = () => {
  const { setIsDropDownOpen, isDropDownOpen, setFilterText } =
    useGlobalContext();

  const handleFilter = (item) => {
    setIsDropDownOpen(!isDropDownOpen);
    setFilterText(item);
  };

  return (
    <FilterList>
      {regions.map((item, index) => {
        return (
          <FilterItem key={index} onClick={() => handleFilter(item)}>
            {item}
          </FilterItem>
        );
      })}
    </FilterList>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FilterContainer = styled.div`
  width: 200px;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: ${(props) => props.theme.cardBackground};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.text};
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.5rem;

  .icon {
    font-size: 26px;
  }
`;

const FilterList = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-width: 200px;
  background: ${(props) => props.theme.cardBackground};
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  padding: 16px 24px;
  position: absolute;
  top: 70px;
  p {
    margin-bottom: 8px;
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const FilterItem = styled.p`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;
