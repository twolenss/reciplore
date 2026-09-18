import { useState, useEffect } from "react";

const STORAGE_KEY = "favorites";

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      setFavorites(Array.isArray(stored) ? stored : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  const addFavorite = (recipe) => {
    setFavorites((prev) => {
      if (prev.some((r) => r.idMeal === recipe.idMeal)) return prev;
      const next = [...prev, recipe];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => {
      const next = prev.filter((r) => r.idMeal !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const toggleFavorite = (recipe) => {
    if (favorites.some((r) => r.idMeal === recipe.idMeal)) {
      removeFavorite(recipe.idMeal);
    } else {
      addFavorite(recipe);
    }
  };

  const isFavorite = (id) => favorites.some((r) => r.idMeal === id);

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
};

export default useFavorites;