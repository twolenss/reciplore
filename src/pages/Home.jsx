import { getRecipe } from "../services/recipeService";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const [first, second] = await Promise.all([getRecipe(), getRecipe()]);
        setRecipes([first.meals[0], second.meals[0]]);
      } catch (err) {
        console.log(err.message || "Something went wrong");
      }
    };

    fetchFeatured();
  }, []);

  const refreshFeatured = (index) => {
    getRecipe().then((data) => {
      setRecipes((prev) => {
        const next = [...prev];
        next[index] = data.meals[0];
        return next;
      });
    });
  };

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
        <div className="section-heading">
          <div><p className="eyebrow">Picked for you</p><h2>Today's featured recipe</h2></div>
          <button className="button button--secondary" onClick={() => refreshFeatured(0)}>Surprise me <span>↻</span></button>
        </div>
        {recipes[0] && <div className="featured-card"><RecipeCard recipe={recipes[0]} /></div>}
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <div><p className="eyebrow">Also worth a try</p><h2>Another featured recipe</h2></div>
          <button className="button button--secondary" onClick={() => refreshFeatured(1)}>Surprise me <span>↻</span></button>
        </div>
        {recipes[1] && <div className="featured-card"><RecipeCard recipe={recipes[1]} /></div>}
      </section>
    </div>
  );
}

export default Home;