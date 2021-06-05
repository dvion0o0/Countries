import React from "react";
import styled from "styled-components";
import { BsMoon } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";

function Navbar({ background }) {
  const { setToggle, Toggle } = useGlobalContext();
  let history = useHistory();

  return (
    <Wrapper>
      <div className="nav-center">
        <h2 onClick={() => history.push("/")}>Where in the world?</h2>
        <h4 onClick={() => setToggle(!Toggle)}>
          <BsMoon className="icon" />
          {Toggle ? "Light Mode" : "Dark Mode"}
        </h4>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  background: ${(props) => props.theme.cardBackground};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  height: 70px;
  display: grid;
  align-items: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-weight: 800;
      color: ${(props) => props.theme.text};
      cursor: pointer;
    }
    h4 {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.text};
      font-weight: 600;
      cursor: pointer;
      .icon {
        margin-right: 0.5rem;
      }
    }
  }
`;
