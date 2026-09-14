const randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchRecipeAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s="
async function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  if (response.status === 204) return null;
  return response.json();
}

export async function getRecipe() {
  const response = await fetch(randomRecipe);
  return handleResponse(response);
}

export async function  searchRecipe(recipe) {
    const response = await fetch(searchRecipe + recipe);
    return handleResponse(response);
    
}
