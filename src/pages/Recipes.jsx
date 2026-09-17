import { useState, useEffect } from "react";
import { firsLetterMeals } from "../services/recipeService";
import AlphabetBar from "../components/AlphabetBar";
import RecipeList from "../components/RecipeList";

function Recipes() {
  const [letter, setLetter] = useState("a");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    firsLetterMeals(letter)
      .then((data) => setRecipes(data.meals || []))
      .catch((err) => setError(err.message || "Failed to fetch"))
      .finally(() => setLoading(false));
  }, [letter]);

  return (
    <div className="listing-page">
      <header className="page-heading"><p className="eyebrow">Explore the collection</p><h1>Recipes for every appetite</h1><p>Browse a world of flavorful dishes, one letter at a time.</p></header>
      <AlphabetBar activeLetter={letter} onSelect={setLetter} />
      {isLoading && <p className="status-message">Loading delicious ideas…</p>}
      {error && <p className="status-message status-message--error">{error}</p>}
      {!isLoading && !error && !recipes.length && (
        <p className="status-message">No recipes start with "{letter.toUpperCase()}".</p>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default Recipes;
