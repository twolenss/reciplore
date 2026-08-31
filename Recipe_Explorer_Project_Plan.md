# Recipe Explorer

## Project Overview

Recipe Explorer is a multi-page React web application that allows users to discover, search, browse, and view recipes using a public recipe API.

## Project Goals

- Browse recipes
- Search recipes by name
- Browse recipe categories
- View recipes by category
- View detailed recipe information
- Display ingredients and measurements
- Display cooking instructions
- Save and remove favorite recipes
- Persist favorites using localStorage
- Handle loading states
- Handle API errors
- Handle empty search results
- Navigate through multiple pages using React Router

## Main Pages

### Home
The landing page may include:
- Application title
- Search bar
- Featured or random recipe
- Recipe categories

### Recipes
Displays recipes retrieved from the public API.

Each recipe may display:
- Recipe image
- Recipe name
- Category
- Area or cuisine
- View Details button

### Search Results
Displays recipes matching a user's search.

The page should handle:
- Loading
- Results
- No results
- API errors

### Recipe Details
Displays complete information about a selected recipe:
- Recipe image
- Recipe name
- Category
- Area or cuisine
- Ingredients
- Measurements
- Instructions
- Source or video links, when available
- Add or remove from favorites

Suggested route:

```text
/recipes/:id
```

### Categories
Displays available recipe categories. Selecting a category displays recipes belonging to that category.

Suggested route:

```text
/categories/:categoryName
```

### Favorites
Displays recipes saved by the user. Favorites should be stored in localStorage so they remain after refreshing the browser.

## Suggested Routes

```text
/                           Home
/recipes                    Recipes
/recipes/:id                Recipe Details
/search                     Search Results
/categories                 Categories
/categories/:categoryName   Recipes by Category
/favorites                  Favorite Recipes
```

## Public API

The project will use a public recipe API that provides:
- Recipe names
- Recipe images
- Categories
- Areas or cuisines
- Ingredients
- Measurements
- Instructions
- Recipe IDs

The exact API and endpoints will be selected before development begins.

## Main Features

### Recipe Browsing
Display recipes using reusable components such as RecipeCard and RecipeList.

### Search

```text
User enters a search term
        ↓
Application sends API request
        ↓
Loading state
        ↓
Results or empty state
```

### Categories
Users can select a category and view recipes belonging to it.

### Recipe Details
Use the recipe ID from the URL to retrieve and display detailed recipe information.

### Favorites
Practice:
- Adding favorites
- Removing favorites
- Preventing duplicates
- Checking whether a recipe is already saved
- Saving to localStorage
- Loading saved favorites

## React Concepts to Practice

- Components
- Props
- useState
- useEffect
- Event handling
- Form handling
- List rendering with map()
- Conditional rendering
- Loading states
- Error handling
- Empty states
- Fetching external APIs
- Dynamic API requests
- React Router
- Dynamic routes
- URL parameters
- Reusable components
- Array methods
- localStorage
- Transforming API data

## Suggested Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeList.jsx
│   ├── CategoryCard.jsx
│   ├── CategoryList.jsx
│   ├── Loading.jsx
│   ├── ErrorMessage.jsx
│   └── EmptyState.jsx
│
├── layouts/
│   └── Layout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── RecipeDetails.jsx
│   ├── SearchResults.jsx
│   ├── Categories.jsx
│   ├── CategoryRecipes.jsx
│   └── Favorites.jsx
│
├── services/
│   └── recipeService.js
│
├── hooks/
│   └── useFavorites.js
│
├── App.jsx
└── main.jsx
```

Folders and components should be added gradually as they become necessary.

## Development Plan

### Phase 1 — Project Setup
1. Create the React project.
2. Clean unnecessary starter files.
3. Install React Router.
4. Create the main pages.
5. Set up routes.
6. Create a shared layout and navigation.

### Phase 2 — API Integration
1. Select a public recipe API.
2. Study the API endpoints.
3. Create a recipe service.
4. Fetch initial recipe data.
5. Test the API response.
6. Display API data.

### Phase 3 — Recipe Display
1. Create RecipeCard.
2. Display recipe images and names.
3. Render lists using map().
4. Add loading states.
5. Add error states.
6. Add empty states.

### Phase 4 — Recipe Details
1. Create a dynamic route.
2. Get the recipe ID from the URL.
3. Fetch recipe details.
4. Display recipe information.
5. Display ingredients and measurements.
6. Display instructions.

### Phase 5 — Search
1. Create a search input.
2. Store the search term.
3. Request recipes using the search term.
4. Display search results.
5. Handle no-result searches.

### Phase 6 — Categories
1. Display available categories.
2. Create category cards.
3. Navigate to category recipes.
4. Display recipes for the selected category.

### Phase 7 — Favorites
1. Add recipes to favorites.
2. Remove recipes from favorites.
3. Prevent duplicates.
4. Save favorites to localStorage.
5. Load favorites when the application starts.
6. Build the Favorites page.

### Phase 8 — UI and Polish
1. Improve layout and navigation.
2. Add responsive design.
3. Improve loading indicators.
4. Improve error and empty states.
5. Ensure consistent styling.

### Phase 9 — Refactoring
1. Review component responsibilities.
2. Remove repeated code.
3. Improve service functions.
4. Create reusable components.
5. Consider custom hooks where useful.
6. Remove unused code.

## Initial Version Scope

The first complete version should include:
- Multi-page routing
- Public API integration
- Recipe browsing
- Recipe search
- Recipe details
- Categories
- Favorites
- localStorage persistence
- Loading states
- Error states
- Empty states

## Future Improvements

- Pagination
- Infinite scrolling
- Search by ingredient
- Random recipe button
- Dark mode
- Recent searches
- Recently viewed recipes
- Authentication
- Cloud-based favorites
- Personalized recommendations
- Deployment

## Learning Goal

The main purpose of Recipe Explorer is to move from working with self-managed CRUD data to working with real external API data.

This project will help develop the ability to:
1. Understand unfamiliar API responses.
2. Transform API data into useful UI data.
3. Build applications around external data.
4. Handle loading, errors, and missing data.
5. Use React Router for multi-page navigation.
6. Work with dynamic routes and URL parameters.
7. Combine API data with browser storage.
8. Build reusable and organized frontend components.

Recipe Explorer is the next learning step after the Task Management System and Inventory Management System, introducing more realistic frontend data handling without requiring a custom backend.
