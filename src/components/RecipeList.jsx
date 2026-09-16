import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
        
      ))}
    </div>
  );
}

export default RecipeList;