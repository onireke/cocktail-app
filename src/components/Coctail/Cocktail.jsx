import { useNavigate } from "react-router-dom";
import React from "react";
import "./Cocktail.scss";

function Cocktail({ image, name, id, info, glass }) {
  const navigate = useNavigate();
  return (
    <main className="cocktail-appear">
      <div className="image-container">
        <img src={image} alt={name} className="cocktail-image" />
      </div>
      <div className="cocktail-base">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <button
          className="details"
          onClick={() => navigate(`/Cocktail?id=${id}`)}
        >
          DETAILS
        </button>
      </div>
    </main>
  );
}

export default Cocktail;
