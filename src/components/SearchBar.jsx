import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit" className="bg-green-200 border 10px">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
