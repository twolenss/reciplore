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

  return (
   <div>
    {Object.entries(recipe).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong> {value}
      </div>
    ))}
  </div>

  );
}

export default RecipeDetails;
