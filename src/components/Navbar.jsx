import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <nav className="site-nav">
      <NavLink className="brand" to="/">Reciplore<span>•</span></NavLink>
      <div className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      </div>
      <SearchBar />
      <div className="nav-links nav-links--end">
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
