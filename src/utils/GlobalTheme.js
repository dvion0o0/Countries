import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
body{
    background: ${(props) => props.theme.background};
}

`;

export default GlobalTheme;
