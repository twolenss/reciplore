import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const trimmedTerm = searchTerm.trim();

    if (!trimmedTerm) return;

    const timer = setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(trimmedTerm)}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, navigate]);

  return (
    <form>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
