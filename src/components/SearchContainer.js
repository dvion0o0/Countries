import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function SearchContainer({ background }) {
  return (
    <Wrapper>
      <SearchBar background />
      <Filter background />
    </Wrapper>
  );
}

export default SearchContainer;

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
