import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import Cocktails from "../../components/Cocktails/Cocktails";
import "./Home.scss";

function Home() {
  return (
    <section className="home-page">
      <SearchForm />
      <Cocktails />
    </section>
  );
}

export default Home;
