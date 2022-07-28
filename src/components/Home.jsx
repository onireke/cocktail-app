import React from "react";
import SearchForm from "./SearchForm";
import Cocktails from "./Cocktails";

function Home() {
  return (
    <section className="home-page">
      <SearchForm />
      <Cocktails />
    </section>
  );
}

export default Home;
