import React from "react";

import Header from "./Header";
const Search = (props) => {
  return (
    <div className='titleContainer'>
      <Header text='Search' />
      <input className="inputSearch" onChange={props.filter} placeholder="Search for a country" />
    </div>
  );
};

export default Search;
