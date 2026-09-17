import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mealsIdDetails } from "../services/recipeService";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    mealsIdDetails(id)
      .then((data) => setRecipe(data.meals?.[0] || null))
      .catch((err) => setError(err.message || "Failed to fetch"))
      .finally(() => setLoading(false));
  }, [id]);


  console.log("Recipe ID:", id);

  if (loading) {
    return <p className="status-message">Loading your recipe…</p>;
  }

  if (error) {
    return <p className="status-message status-message--error">{error}</p>;
  }

  if (!recipe) {
    return <p className="status-message">Recipe not found.</p>;
  }
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (name && name.trim()) {
      ingredients.push({ name, measure });
    }
  }
  const steps = recipe.strInstructions ? recipe.strInstructions.split("\r\n").filter((s) => s.trim()) : [];

  return (
    <article className="recipe-details">
      <div className="recipe-details__hero">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <div className="recipe-details__intro"><p className="eyebrow">{recipe.strArea} cuisine</p><h1>{recipe.strMeal}</h1><div className="recipe-meta"><span>{recipe.strCategory}</span><span>Freshly made</span></div></div>
      </div>

      <div className="recipe-details__body"><section className="ingredients-panel"><p className="eyebrow">What you'll need</p><h2>Ingredients</h2><ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.name}
          </li>
        ))}
      </ul></section>

      <section className="instructions-panel"><p className="eyebrow">Let's make it</p><h2>Instructions</h2><ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className="recipe-actions">{recipe.strSource && (
        <a className="button button--secondary" href={recipe.strSource} target="_blank" rel="noreferrer">View Source</a>
      )}
      {recipe.strYoutube && (
          <a className="button" href={recipe.strYoutube} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
      )}</div></section></div>
    </article>
  );
}

export default RecipeDetails;
