const randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchRecipeAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
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

// export async function searchRecipe(recipe) {
//   const url = searchRecipeAPI + encodeURIComponent(recipe);
//   console.log("SEARCH URL:", url);
//   const response = await fetch(url);
//   console.log("RESPONSE:", response);
//   const data = await handleResponse(response);
//   console.log("DATA:", data);

//   return data;
// }
export async function searchRecipes(query) {
  const response = await fetch(searchRecipeAPI + encodeURIComponent(query));
  return handleResponse(response);
}