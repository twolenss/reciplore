import { NavLink } from "react-router-dom";

function Home({recipe}) {
  return (
    <div>
      <h2>Recipe Explorer</h2>
      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      <p>Category: {recipe.strCategory}</p>
      <p>Country: {recipe.strCountry}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Steps: {recipe.strInstructions}</p>
      {/* <NavLink to="/recipes">Recipe</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/favorites">Favorites</NavLink> */}
    </div>
  );
}
export default Home;
