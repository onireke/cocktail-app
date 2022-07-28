import { Link } from "react-router-dom";
import React from "react";

function Cocktail({ image, name, id, info, glass }) {
  return (
    <main>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="coctail-base">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <h4>{info}</h4>
        <Link to={"/cocktail/${id}"} className="single-link">
          <button className="details">Details</button>
        </Link>
      </div>
    </main>
  );
}

export default Cocktail;
