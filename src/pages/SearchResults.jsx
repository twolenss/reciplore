import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchRecipes } from "../services/recipeService";
import SearchBar from "../components/SearchBar";
function SearchResults() {
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("q");

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm){ setRecipes([]);return;}
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await searchRecipes(searchTerm);
        setRecipes(data.meals || []);
      } catch (err) {
        console.error("ERROR:", err);
        setError(err.message || "Failed to fetch recipes");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [searchTerm]);

  return (
    <div>
      <SearchBar />
      {searchTerm && 
       (
        <>
          <p>Results for: <strong>{searchTerm}</strong></p>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && !recipes.length && <p>No recipes found for "{searchTerm}".</p>}
          {recipes.map((recipe) => (
            <div key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h2>{recipe.strMeal}</h2>
              <p>{recipe.strCategory}</p>
              <p>{recipe.strArea}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default SearchResults;
