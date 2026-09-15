import { useState,useEffect  } from "react";
import { getRecipe, searchRecipes } from "../services/recipeService";  
const useFavorites = () => {
    const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getRecipe();
        setRecipe(data.meals[0]);
      } catch (err) {
        setError(err.message || "An error occurred while fetching recipe");
      } finally {
        setLoading(false);
      }
    };
  

    fetchRecipe();
  }, []);
    return {recipe, error, isLoading,}
}
 
export default useFavorites;