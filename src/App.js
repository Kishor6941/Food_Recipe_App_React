import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "312c67f9";
  const APP_KEY = "686c2137e70cbfb36cc087f23074cdd5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const UpdateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="app">
      <form onSubmit={getSearch} className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search recipe"
          value={search}
          onChange={UpdateSearch}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((eachrecipe) => (
          <Recipe
            key={eachrecipe.recipe.label}
            title={eachrecipe.recipe.label}
            calories={eachrecipe.recipe.calories}
            image={eachrecipe.recipe.image}
            ingredients={eachrecipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
