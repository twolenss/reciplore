import { NavLink } from "react-router-dom";

function Home({ recipe }) {
  return (
    <div>
<h1 className="text-2xl">Discover delicious recipes.</h1>

      <h2>{recipe.strMeal}</h2>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      <p>Category: {recipe.strCategory}</p>
      <p>Country: {recipe.strCountry}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Instructions: {recipe.strInstructions}</p>
     
    </div>
  );
}
export default Home;
