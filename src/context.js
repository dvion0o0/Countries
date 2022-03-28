import React, { useState, useContext, useEffect } from "react";
import { Dark, Light } from "./utils/theme";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [Theme, setTheme] = useState(Light);
  const [Toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [countriesList, setCountriesList] = useState([]);

  // api
  // https://restcountries.eu

  const fetchCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setIsLoading(false);
      setCountriesList(data);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  const searchCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v2/name/${input}`
      );
      const data = await response.json();
      setIsLoading(false);
      setCountriesList(data);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  const filterCountries = async () => {
    setIsLoading(true);
    if (filterText) {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/region/${filterText}`
        );
        const data = await response.json();
        setIsLoading(false);
        setCountriesList(data);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    }
  };

  useEffect(() => {
    if (input) {
      searchCountries();
    } else {
      fetchCountries();
    }
  }, [input]);

  useEffect(() => {
    filterCountries();
  }, [filterText]);

  useEffect(() => {
    if (Toggle) {
      setTheme(Dark);
    } else {
      setTheme(Light);
    }
  }, [Toggle]);

  return (
    <AppContext.Provider
      value={{
        Theme,
        setToggle,
        Toggle,
        setInput,
        setIsDropDownOpen,
        isDropDownOpen,
        filterText,
        setFilterText,
        isLoading,
        countriesList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
