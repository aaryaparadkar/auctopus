import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CreateRecipe from './CreateRecipe';
import DeleteRecipe from './DeleteRecipe';
import EditRecipe from './EditRecipe';
import RecipeList from './RecipeList';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipes/');
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeAdded = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`);
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
      console.error('Failed to delete recipe', error);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RecipeList recipes={recipes} onDelete={handleDelete} />} />
          <Route path='/create' element={<CreateRecipe onRecipeAdded={handleRecipeAdded} />} />
          <Route path='/edit/:id' element={<EditRecipe />} />
          <Route path='/delete/:id' element={<DeleteRecipe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
