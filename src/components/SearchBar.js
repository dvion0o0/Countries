import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

function SearchBar({ background }) {
  const { setInput } = useGlobalContext();

  return (
    <InputContainer>
      <AiOutlineSearch className="icon" />
      <Input
        placeholder="Search for a country"
        onChange={(e) => setInput(e.target.value)}
      ></Input>
    </InputContainer>
  );
}

export default SearchBar;

const InputContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.cardBackground};
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 7px;

  .icon {
    font-size: 16px;
    font-weight: 800;
    color: ${(props) => props.theme.text};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 55px;
    padding: 0.85rem;
  }
`;

const Input = styled.input`
  background: transparent;
  border: transparent;
  outline: transparent;
  width: 100%;
  padding-left: 1rem;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;
