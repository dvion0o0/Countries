import React from "react";
import styled from "styled-components";
import SearchContainer from "../components/SearchContainer";
import Loading from "../components/Loading";
import CountryCard from "../components/CountryCard";
import { useGlobalContext } from "../context";

function Home() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <Wrapper>
        <SearchContainer />
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SearchContainer />
      <CountryCard />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
