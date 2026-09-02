import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Recipe Explorer</h2>
      <NavLink to="/recipes">Recipe</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
}
export default Home;
