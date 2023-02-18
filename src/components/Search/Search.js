import React from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        className="input-search"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
