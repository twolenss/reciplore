import { useEffect, useState } from "react";
import { categoryDetails, allCategory } from "../services/recipeService";
import CategoryList from "../components/CategoryList";
import { useNavigate } from "react-router-dom";
function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);
    Promise.all([allCategory(), categoryDetails()])
      .then(([categoryData, categoryListData]) => {
        setCategories(categoryData.categories || []);
        setCategoryList(categoryListData.meals || []);
        console.log("All categories: ", categoryData);
        console.log("All list :", categoryListData);
      })
      .catch((err) => setError(err.message || "Failed to fetch"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <select
        defaultValue="All"
        onChange={(e) => navigate(`/categories/${e.target.value}`)}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-primary-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      >
        <option value="all">All Categories</option>
        {categoryList.map((meal) => (
          <option key={meal.strCategory} value={meal.strCategory}>
            {meal.strCategory}
          </option>
        ))}
      </select>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && !categories.length && <p>No categories found.</p>}
      {!isLoading && !error && categories.length > 0 && <CategoryList categories={categories} categoryList={categoryList} />}
    </div>
  );
}

export default Categories;
