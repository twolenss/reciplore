import { getRecipe } from "../services/recipeService";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
function Home({}) {
  const [recipe, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipe();
        setRecipes(data.meals || []);
      } catch (err) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchRecipes();
  }, []);
const featured = recipe[0]
  return (
    <div>
      <h1 className="text-2xl">Discover delicious recipes.</h1>
      <SearchBar />
      {featured && <RecipeCard recipe={featured} />}
       <button onClick={() => getRecipe().then((data) => setRecipes(data.meals || []))}>
        Another recipe
      </button>
    </div>
  );
}
export default Home;
