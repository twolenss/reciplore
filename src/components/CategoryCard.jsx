import { Link } from "react-router-dom";

function CategoryCard({ category, categoryList }) {
  return (
    <div>
      <img src={category.strCategoryThumb} alt={category.strCategory} width="200" />
      <h2>{category.strCategory }</h2>
      <p>{category.strCategoryDescription}</p>
      <Link to={`/categories/${category.strCategory}`}>View Recipes</Link>
    </div>
  );
}

export default CategoryCard;