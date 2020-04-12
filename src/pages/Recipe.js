import React, { useEffect, useState } from "react";
import Recipes from "./components/Recipes";
import "../App.css";

const Recipe = () => {
  const APP_ID = "f1226e92";
  const APP_KEY = "fd27e53709193f681dca48269b2870ee";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

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

  const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search)
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="wrapper container">
      <form className="search-form" onSubmit={getSearch} style={{alignItems: 'center', justifyContent: 'center', display : 'flex'}}>
      <div className="row">
      <div className="col-md-10"><input type="text" className="form-control" value={search} onChange={updateSearch} />
      </div>
      <div className="col-md-2">
      <button type="submit" className="btn btn-dark">
        Search
      </button></div>
      </div>
      </form>
    <div style={{alignItems: 'center', justifyContent: 'center', display : 'flex'}}>
      {recipes.map(recipe => (
        <Recipes
          key={recipe.recipe.label}
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

export default Recipe;
