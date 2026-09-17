import { getRecipe } from "../services/recipeService";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
function Home({}) {
  const [recipe, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipe();
        setRecipes(data.meals || []);
      } catch (err) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchRecipes();
  }, []);
const featured = recipe[0]
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Cook something memorable</p>
          <h1>Discover recipes made to be <em>shared.</em></h1>
          <p className="hero__text">Find simple, delicious inspiration for every table, mood, and craving.</p>
        </div>
        <div className="hero__visual" aria-hidden="true"><div className="hero__shape"></div></div>
      </section>
      <section className="featured-section">
        <div className="section-heading"><div><p className="eyebrow">Picked for you</p><h2>Today's featured recipe</h2></div>
        <button className="button button--secondary" onClick={() => getRecipe().then((data) => setRecipes(data.meals || []))}>Surprise me <span>↻</span></button></div>
        {featured && <div className="featured-card"><RecipeCard recipe={featured} /></div>}
      </section>
    </div>
  );
}
export default Home;
