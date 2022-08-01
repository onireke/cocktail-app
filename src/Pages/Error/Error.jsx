import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1> page cannot be found!</h1>
        <Link to="/">
          <button className="home-button">BACK HOME</button>
        </Link>
      </div>
    </section>
  );
}

export default Error;
