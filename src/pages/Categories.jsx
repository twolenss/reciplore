import { useEffect, useState } from "react";
import { categoryList } from "../services/recipeService";
import CategoryList from "../components/CategoryList";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    categoryList()
      .then((data) => setCategories(data.categories || []))
      .catch((err) => setError(err.message || "Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && !categories.length && <p>No categories found.</p>}
      {!isLoading && !error && categories.length > 0 && (
        <CategoryList categories={categories} />
      )}
    </div>
  );
}

export default Categories;