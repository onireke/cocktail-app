import { useContext, useState, useEffect } from "react";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("A");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchFilter}`);
        const data = await response.json();
        console.log(data);
        const { drinks } = data;

        if (drinks) {
          const newDrinks = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newDrinks);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDrinks();
  }, [searchFilter]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchFilter,
        searchFilter,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
