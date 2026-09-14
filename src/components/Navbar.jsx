import { NavLink } from "react-router-dom";

function Navbar() {
  return (
  <nav className="flex gap-6">
  <NavLink to="/recipes">Recipe</NavLink>
  <NavLink to="/search">Search</NavLink>
  <NavLink to="/categories">Categories</NavLink>
  <NavLink to="/favorites">Favorites</NavLink>
</nav>


  );
}

export default Navbar;