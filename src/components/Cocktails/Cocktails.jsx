import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import Cocktail from "../Cocktail/Cocktail";
function Cocktails() {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="no-cocktails">No cocktails march your search criteria</h2>
    );
  }
  console.log(loading, "loading");

  return (
    <main>
      <h2>Cocktails </h2>
      {loading ? (
        <img src="meme.gif" alt="meme" />
      ) : (
        <div className="main-cocktails">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      )}
    </main>
  );
}

export default Cocktails;
