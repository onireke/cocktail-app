import React from "react";
// import { useGlobalContext } from "./Context";

function SearchForm() {
  // const { setSearchFilter } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  // const handleChange = () => {
  //   setSearchFilter(searchValue.current.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <form className="search" onSubmit={handleSubmit}>
        <div className="request-box">
          <label className="search-request">Search Your Favourite Food</label>
          <input
            type="text"
            className="home-input"
            ref={searchValue}
            // onChange={handleChange}
          />
        </div>
      </form>
    </main>
  );
}

export default SearchForm;
