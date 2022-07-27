import React from "react";

function Home() {
  return (
    <section className="home-page">
      <div className="search">
        <div className="request-box">
          <p className="search-request">Search Your Favourite Food</p>
          <input type="text" className="home-input" />
        </div>
      </div>
    </section>
  );
}

export default Home;
