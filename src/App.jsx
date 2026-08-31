import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import SearchResults from "./pages/SearchResults";
import Categories from "./pages/Categories";
import CategoryRecipes from "./pages/CategoryRecipes";
import Favorites from "./pages/Favorites";
function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<AppHome/>}/>

        <Route path="recipes" >
          <Route index element={<Recipes/>}/>
          <Route path=":id" element={<RecipeDetails/>}/>
        </Route>

        <Route path="search" element={<SearchResults/>} />

        <Route path="categories">
          <Route index element={<Categories/>}/>
          <Route path=":categoryname" element={<CategoryRecipes/>}/>
        </Route>

        <Route path="favorites" element={<Favorites/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
