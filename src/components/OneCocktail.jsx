import React from "react";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = `https://www.www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

function OneCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstruction: instruction,
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
            instruction,
            ingredients,
          };

          setCocktails(newCocktail);
        } else {
          setCocktails(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktails) {
    return <h3 className="no-cocktails">no cocktails to show</h3>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktails;

  return (
    <section>
      <Link to="/">
        <button>back home</button>
        <h2>{name}</h2>
        <div className="drink">
          <img src={img} alt={name} />
          <div className="information">
            <p>
              <span className="drink-data">name:</span>
              {name}
            </p>
            <p>
              <span className="drink-data">category:</span>
              {category}
            </p>
            <p>
              <span className="drink-data">info:</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions:</span>
              {instructions}
            </p>

            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default OneCocktail;
