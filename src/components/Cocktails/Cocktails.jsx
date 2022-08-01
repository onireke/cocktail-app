import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import Cocktail from "../Coctail/Cocktail";
import "./Cocktails.scss";
function Cocktails() {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  console.log("hereeeee");

  if (cocktails.length < 1) {
    return (
      <h2 className="no-cocktails">No cocktails march your search criteria</h2>
    );
  }
  console.log(loading, "loading");

  return (
    <main className="coctails-page">
      <h2 className="cocktails-heading">Drink Menu </h2>
      {loading ? (
        <img src="meme.gif" alt="meme" />
      ) : (
        <div className="main-cocktails">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} id={item.idDrink} {...item} />;
          })}
        </div>
      )}
    </main>
  );
}

export default Cocktails;
