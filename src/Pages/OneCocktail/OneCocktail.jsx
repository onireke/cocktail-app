import React from "react";
import { useEffect, useState } from "react";
// import Loading from "../../components/Loading";
import { useParams, Link, useSearchParams } from "react-router-dom";
import "./OneCocktail.scss";

function OneCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const [search] = useSearchParams();
  const drinkId = search.get("id");

  console.log("id", drinkId);

  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        );
        const data = await response.json();
        console.log("data:", data);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [drinkId]);

  // if (loading) {
  //   return <Loading />;
  // }

  if (!cocktail) {
    return <h3 className="no-cocktails">no cocktails to show</h3>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="one-cocktail">
        <Link to="/">
          <button className="home">back home</button>
        </Link>
        {loading ? (
          <img src="meme.gif" alt="" />
        ) : (
          <>
            <h1 className="drink-name">{name}</h1>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="information">
                <p>
                  <span className="drink-data">name: </span>
                  {name}
                </p>
                <p>
                  <span className="drink-data">category: </span>
                  {category}
                </p>
                <p>
                  <span className="drink-data">info: </span>
                  {info}
                </p>
                <p>
                  <span className="drink-data">glass: </span>
                  {glass}
                </p>
                <p>
                  <span className="drink-data">instructions: </span>
                  {instructions}
                </p>

                <p>
                  <span className="drink-data">ingredients : </span>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}>{item}</span> : null;
                  })}
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    );
  }
}

export default OneCocktail;
