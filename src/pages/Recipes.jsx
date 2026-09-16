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
    <div>
      <h1>Recipes</h1>
      <AlphabetBar activeLetter={letter} onSelect={setLetter} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && !recipes.length && (
        <p>No recipes start with "{letter.toUpperCase()}".</p>
      )}
      {!isLoading && !error && recipes.length > 0 && (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default Recipes;