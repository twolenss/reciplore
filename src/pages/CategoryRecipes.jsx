import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoryFilter } from "../services/recipeService";
import RecipeList from "../components/RecipeList";
function CategoryRecipes() {
  const { categoryname } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    categoryFilter(categoryname)
      .then((data) => setRecipes(data.meals || []))
      .catch((err) => setError(err.message || "Error fetching recipe"))
      .finally(() => setLoading(false));
  }, [categoryname]);
  //THIS CONTAINS THE DISPLAY OF RECIPES PER CATEGORIES
  return (
    <div>
      <h1>{categoryname}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && !recipes.length && (
        <p>No recipes found in "{categoryname}".</p>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}
export default CategoryRecipes;
