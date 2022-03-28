import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardBackspace } from "react-icons/md";
import Loading from "../components/Loading";

function Details() {
  const { country } = useParams();
  const [countryName, setCountryName] = useState(country);
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState([]);

  const fetchCountryDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${country}`
      );
      const data = await response.json();
      setCountryDetails(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchCountryDetail();
  }, [country]);

  if (isLoading) {
    return (
      <Wrapper>
        <BackBtn to="/">
          <MdKeyboardBackspace className="icon" /> Back
        </BackBtn>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BackBtn to="/">
        <MdKeyboardBackspace className="icon" /> Back
      </BackBtn>
      <Container>
        <CountryImage src={countryDetails.flag} alt={countryDetails.name} />
        <CountryDetailContainer>
          <h2>{countryDetails.name}</h2>
          <CountryContent>
            <ContentOne>
              <h4>
                Native Name: <span>{countryDetails.nativeName} </span>
              </h4>
              <h4>
                Population:{" "}
                <span> {countryDetails.population.toLocaleString()} </span>
              </h4>
              <h4>
                Region: <span> {countryDetails.region}</span>
              </h4>
              <h4>
                Sub Region: <span> {countryDetails.subregion}</span>
              </h4>
              <h4>
                Capital: <span> {countryDetails.capital}</span>
              </h4>
            </ContentOne>
            <ContentTwo>
              <h4>
                Top Level Domain: <span> {countryDetails.topLevelDomain} </span>
              </h4>
              <h4>
                Currencies:
                {countryDetails.currencies.map((item, index) => {
                  return <span key={index}> {item.name} </span>;
                })}
              </h4>
              <h4>
                Languages:
                {countryDetails.languages.map((item, index) => {
                  return <span key={index}> {item.name}, </span>;
                })}
              </h4>
            </ContentTwo>
          </CountryContent>
          <div>
            <h4>Border Countries:</h4>
            {countryDetails.borders.length > 0 ? (
              <ButtonContainer>
                {countryDetails.borders.map((item, index) => {
                  return (
                    <BorderButton
                      key={index}
                      to={`/details/${item.toLowerCase()}`}
                    >
                      {" "}
                      {item}
                    </BorderButton>
                  );
                })}
              </ButtonContainer>
            ) : (
              <h3>No borders</h3>
            )}
          </div>
        </CountryDetailContainer>
      </Container>
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  width: 90vw;
  margin: 4rem auto;
  font-size: 16px;
`;

const BackBtn = styled(Link)`
  text-decoration: none;
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.155);
  font-weight: 600;
  font-size: 14px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.6rem;

  .icon {
    margin-right: 0.5rem;
    font-size: 16px;
    font-weight: 800;
  }
`;

const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  color: ${(props) => props.theme.text};
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const CountryImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

const CountryDetailContainer = styled.div`
  margin-top: 2rem;
  font-weight: 800;

  h2 {
    margin-bottom: 1.5rem;
  }

  div {
    font-weight: 600;
    display: grid;
    align-items: center;
    row-gap: 0.5rem;
  }
`;

const CountryContent = styled.div`
  display: grid;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
`;

const ContentOne = styled.div`
  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 16px;
    span {
      font-weight: 300;
      margin-left: 0.5rem;
    }
  }
`;

const ContentTwo = styled.div`
  margin-top: 2rem;

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 16px;
    span {
      font-weight: 300;
      margin-left: 0.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, auto);
  }
`;

const BorderButton = styled(Link)`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  padding: 0.5rem 1rem;
  border: transparent;
  outline: transparent;
  box-shadow: 2px 3px 7px 1px rgba(0, 0, 0, 0.255);
  margin-left: 0.75rem;
  margin-bottom: 1rem;
  text-decoration: none;
`;
