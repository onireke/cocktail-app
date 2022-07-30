import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
function Cocktails() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="no-coctails">No cocktails march your search criteria</h2>
    );
  }

  return (
    <main>
      <h2>Cocktails </h2>
      <div className="main-cocktails">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}

export default Cocktails;
