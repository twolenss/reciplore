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
    <div className="listing-page">
      <header className="page-heading"><p className="eyebrow">Category collection</p><h1>{categoryname}</h1><p>Explore dishes gathered for this delicious category.</p></header>
      {isLoading && <p className="status-message">Loading recipes…</p>}
      {error && <p className="status-message status-message--error">{error}</p>}
      {!isLoading && !error && !recipes.length && (
        <p className="status-message">No recipes found in "{categoryname}".</p>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}
export default CategoryRecipes;
