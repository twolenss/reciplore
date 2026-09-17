const randomRecipe = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchRecipeAPI = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const mealsByFirstLetter = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const mealsFullDetailsByID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const categories = "https://www.themealdb.com/api/json/v1/1/categories.php";
const allCategories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
const categoryListFilter = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
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
export async function allCategory() {
  const response = await fetch(categories);
  return handleResponse(response);
}
export async function categoryDetails() {
  const response = await fetch(allCategories);
  return handleResponse(response);
}
export async function categoryFilter(filter) {
  const response = await fetch(categoryListFilter + encodeURIComponent(filter));
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
