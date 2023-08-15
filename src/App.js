import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "./components/Search";
import ContentList from "./components/ContentList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    setQuery(query);
    filterByQuery();
  }, [query]);

  const searchFilter = (event) => {
    setQuery(event.target.value);
  };
  const filterByQuery = () => {
    const filteredData = countries.filter((country) =>
      country.name.official.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filteredData);
  };

  return (
    <div className="restCountriesContainer">
      <Search filter={searchFilter} />
      <ContentList countries={filteredCountries}/>
    </div>
  );
};

export default App;
