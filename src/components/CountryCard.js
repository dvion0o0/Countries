import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function CountryCard() {
  const { countriesList } = useGlobalContext();

  return (
    <Wrapper>
      {countriesList.map((item, index) => {
        const CountryName = item.alpha3Code.toLowerCase();

        return (
          <Link
            to={`/details/${CountryName}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <Card>
              <CardImg src={item.flag} alt={item.name} />
              <CardContent>
                <h2>{item.name}</h2>
                <CardFooter>
                  <h4>
                    Population: <span>{item.population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region: <span>{item.region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{item.capital}</span>
                  </h4>
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </Wrapper>
  );
}

export default CountryCard;

const Wrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, auto);
    gap: 3rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5rem;
  }
`;

const Card = styled.article`
  background: ${(props) => props.theme.cardBackground};
  width: 100%;
  height: 400px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s transform linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    width: auto;
`;

const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.345);
`;

const CardContent = styled.div`
  padding: 1rem 2rem;
  color: ${(props) => props.theme.text};

  h2 {
    font-weight: 800;
    margin-bottom: 1.2rem;
  }
`;

const CardFooter = styled.div`
  display: grid;
  row-gap: 0.3rem;

  h4 {
    font-weight: 600;
    span {
      font-weight: 300;
    }
  }
`;
