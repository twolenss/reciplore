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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
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
    <div>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="400" />
      <h1>{recipe.strMeal}</h1>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.name}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {recipe.strSource && (
        <p>
          <a href={recipe.strSource} target="_blank" rel="noreferrer">
            View Source
          </a>
        </p>
      )}
      {recipe.strYoutube && (
        <p>
          <a href={recipe.strYoutube} target="_blank" rel="noreferrer">
            Watch on YouTube
          </a>
        </p>
      )}
    </div>
  );
}

export default RecipeDetails;
