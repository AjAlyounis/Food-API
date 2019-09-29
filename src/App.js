import React, { useEffect, useState } from "react";
import Recipe from "./Rceipe";

import "./App.css";

const App = () => {
  const APP_ID = "5d084955";
  const APP_KEY = "0f6e99b597475612a1f7af57274ea26d";

  const [receipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQurey] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSerach = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    setQurey(search);
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSerach}
        />
        <button className="search-button" type="submit">
          Serarch
        </button>
      </form>
      <div className="recipes">
        {receipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
