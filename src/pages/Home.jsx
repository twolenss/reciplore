import { NavLink } from "react-router-dom";
import { searchRecipes } from "../services/recipeService";
import { useEffect, useState } from "react";
function Home({}) {
  const [recipe, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await searchRecipes("chicken");

        console.log("API DATA:", data);

        setRecipes(data.meals || []);
      } catch (err) {
        console.logs(err.message || "Something went wrong");
      }
    };

    fetchRecipes();
  }, []);
  async function testSearch() {
    const data = await searchRecipes("chicken");
    console.log(data);
  }
  return (
    <div>
      <h1 className="text-2xl">Discover delicious recipes.</h1>

      {/* <h2>{recipe.strMeal}</h2>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      <p>Category: {recipe.strCategory}</p>
      <p>Country: {recipe.strCountry}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Instructions: {recipe.strInstructions}</p> */}

      <h2>Chicken</h2>
        {recipe.map((meal) => (
          <div key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />

            <h2>{meal.strMeal}</h2>

            <p>Category: {meal.strCategory}</p>
            <p>Area: {meal.strArea}</p>
          </div>
        ))}
      {/* <button onClick={testSearch}>test</button> */}
    </div>
  );
}
export default Home;
