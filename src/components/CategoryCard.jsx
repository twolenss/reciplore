import { Link } from "react-router-dom";

function CategoryCard({ category, categoryList }) {
  return (
    <article className="category-card">
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <div className="category-card__content">
        <h2>{category.strCategory }</h2>
        <p>{category.strCategoryDescription}</p>
        <Link className="text-link" to={`/categories/${category.strCategory}`}>Explore recipes <span>→</span></Link>
      </div>
    </article>
  );
}

export default CategoryCard;
