import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card__image-wrap">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <span className="recipe-card__category">{recipe.strCategory}</span>
      </div>
      <div className="recipe-card__content">
        <p className="eyebrow">{recipe.strArea || "Recipe inspiration"}</p>
        <h2>{recipe.strMeal}</h2>
        <Link className="text-link" to={`/recipes/${recipe.idMeal}`}>View recipe <span>→</span></Link>
      </div>
    </article>
  );
}

export default RecipeCard;
