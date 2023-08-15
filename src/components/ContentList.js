import React from "react";

const ContentList = (props) => {
  return (
    <div className="listedCountriesContainer">
      <ul className="listedCountries">
        {props.countries.map((country) => {
          return <a href="" target="_blank" className="country-element">{country.name.official}</a>;
        })}
      </ul>
    </div>
  );
};

export default ContentList;
