const api = "https://www.themealdb.com/api/json/v1/1/random.php";

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  if (response.status === 204) return null;
  return response.json();
}

export async function getRecipe() {
  const response = await fetch(api);
  return handleResponse(response);
}

