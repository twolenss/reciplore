const randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchRecipeAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const mealsByFirstLetter = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const mealsFullDetailsByID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const categorieList = "https://www.themealdb.com/api/json/v1/1/categories.php";
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

export async function categoryList() {
  const response = await fetch(categorieList);
  return handleResponse(response);
}
export async function searchRecipes(query) {
  const response = await fetch(searchRecipeAPI + encodeURIComponent(query));
  return handleResponse(response);
}
export async function firsLetterMeals(query) {
  const response = await fetch(mealsByFirstLetter + encodeURIComponent(query));
  return handleResponse(response);
  
}
export async function mealsIdDetails(id) {
  const response = await fetch(mealsFullDetailsByID + id );
  return handleResponse(response);
}