import React from "react";
import { useGlobalContext } from "./Context";

function SearchForm() {
  const { setSearchFliter } = useGlobalContext();
  return (
    <main>
      <div className="search">
        <div className="request-box">
          <p className="search-request">Search Your Favourite Food</p>
          <input type="text" className="home-input" />
        </div>
      </div>
    </main>
  );
}

export default SearchForm;
