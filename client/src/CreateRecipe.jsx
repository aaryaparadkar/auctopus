// src/components/CreateRecipe.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: ''
  });

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/recipes/', recipe)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange}></textarea>
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange}></textarea>
      <input type="text" name="category" placeholder="Category" onChange={handleChange} />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default CreateRecipe;
