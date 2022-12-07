import React from "react";
import SearchIcon from "../images/search.svg";
import "./Search.scss";

export default function Search() {
  return (
    <form className="Search" id="search-form">
      <div className="d-flex justify-content-between search-box">
        <input
          type="text"
          id="city-input"
          placeholder="Search for city or place..."
          autocomplete="off"
        />
        <button type="submit" className="btn btn-primary btn-search">
          <img src={SearchIcon} alt="Search icon" />
        </button>
      </div>
    </form>
  );
}
