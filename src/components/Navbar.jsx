import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <nav className="flex gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipe</NavLink>
      <SearchBar />
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

export default Navbar;
