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
    <div className="listing-page categories-page">
      <header className="page-heading"><p className="eyebrow">Find your flavor</p><h1>Browse by category</h1><p>From comfort classics to dishes from farther afield.</p></header>
      <select
        defaultValue="All"
        onChange={(e) => navigate(`/categories/${e.target.value}`)}
        className="category-select"
      >
        <option value="all">All Categories</option>
        {categoryList.map((meal) => (
          <option key={meal.strCategory} value={meal.strCategory}>
            {meal.strCategory}
          </option>
        ))}
      </select>
      {isLoading && <p className="status-message">Loading categories…</p>}
      {error && <p className="status-message status-message--error">{error}</p>}
      {!isLoading && !error && !categories.length && <p className="status-message">No categories found.</p>}
      {!isLoading && !error && categories.length > 0 && <CategoryList categories={categories} categoryList={categoryList} />}
    </div>
  );
}

export default Categories;
