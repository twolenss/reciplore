import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strCategory}</p>
      <p>{recipe.strArea}</p>
      <Link to={`/recipes/${recipe.idMeal}`}>View Details</Link>
    </div>
  );
}

export default RecipeCard;