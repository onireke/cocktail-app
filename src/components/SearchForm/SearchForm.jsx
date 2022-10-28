import React from "react";
import { useGlobalContext } from "../../context";
import "./SearchForm.scss";

function SearchForm() {
  const { setSearchFilter } = useGlobalContext();
  const searchValue = React.useRef(null);

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleChange = () => {
    setSearchFilter(searchValue.current.value);
    console.log(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="search-page">
      <form className="search" onSubmit={handleSubmit}>
        <div className="request-box">
          <p className="search-request">Search Your Coctail Here</p>
          <input
            type="text"
            className="home-input1"
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </main>
  );
}

export default SearchForm;
