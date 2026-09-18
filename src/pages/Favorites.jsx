import useFavorites from "../hooks/useFavorites";
import RecipeList from "../components/RecipeList";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="listing-page">
      <header className="page-heading">
        <p className="eyebrow">Your cookbook</p>
        <h1>Favorites</h1>
        <p>The recipes you've saved for later.</p>
      </header>

      {!favorites.length ? (
        <div className="empty-page">
          <p className="eyebrow">Your cookbook</p>
          <h1>No favorites yet</h1>
          <p>Open any recipe and press "Add to favorites" to save it here.</p>
        </div>
      ) : (
        <RecipeList recipes={favorites} />
      )}
    </div>
  );
}

export default Favorites;