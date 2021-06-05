import React from "react";
import GlobalTheme from "./utils/GlobalTheme";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import { useGlobalContext } from "./context";

function App() {
  const { Theme } = useGlobalContext();
  return (
    <ThemeProvider theme={Theme}>
      <GlobalTheme background />
      <Navbar background />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:country">
          <Details />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
