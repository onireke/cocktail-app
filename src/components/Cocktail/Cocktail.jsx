import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Cocktail({ image, name, id, info, glass }) {
  const navigate = useNavigate();
  return (
    <main>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="coctail-base">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <button
          className="details"
          onClick={() => navigate(`Cocktail?id=${id}`)}
        >
          Details
        </button>
      </div>
    </main>
  );
}

export default Cocktail;
