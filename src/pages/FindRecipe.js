import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const SearchRecipes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('Vous devez être connecté pour rechercher des recettes');
      return;
    }
    try {
      const ingredientsString = ingredients.split(',').map(ingredient => ingredient.trim()).join(',');
      const response = await fetch(`/searchRecipesByIngredients/${ingredientsString}`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Erreur lors de la recherche de recettes', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Entrez un ou plusieurs ingrédients"
        />
        <button type="submit">Rechercher des recettes</button>
      </form>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>Nombre d'ingrédients utilisés : {recipe.usedIngredientCount}</p>
          <p>Nombre d'ingrédients manquants : {recipe.missedIngredientCount}</p>
          <p>Nombre de likes : {recipe.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchRecipes;
