import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchRecipes } from "../services/recipeService";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
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
    <div className="listing-page search-results">
      <header className="page-heading"><p className="eyebrow">Find your next favorite</p><h1>Search recipes</h1></header>
      <SearchBar />
      {searchTerm && 
       (
        <>
          <p className="results-copy">Results for <strong>{searchTerm}</strong></p>
          {isLoading && <p className="status-message">Searching recipes…</p>}
          {error && <p className="status-message status-message--error">{error}</p>}
          {!isLoading && !error && !recipes.length && <p className="status-message">No recipes found for "{searchTerm}".</p>}
          {!isLoading && !error && recipes.length > 0 && <RecipeList recipes={recipes} />}
        </>
      )}
    </div>
  );
}

export default SearchResults;
