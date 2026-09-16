import CategoryCard from "./CategoryCard";

function CategoryList({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <CategoryCard key={category.idCategory} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;