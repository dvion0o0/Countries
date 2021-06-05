import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer>
      <h3>Coded with ❤️ by Digvijay</h3>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.text};
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
`;
