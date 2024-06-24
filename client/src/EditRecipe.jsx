// src/components/EditRecipe.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/recipes/${id}/`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/recipes/${id}/`, recipe)
      .then(response => {
        history.push('/recipes');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={recipe.title} onChange={handleChange} />
      <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange}></textarea>
      <textarea name="instructions" value={recipe.instructions} onChange={handleChange}></textarea>
      <input type="text" name="category" value={recipe.category} onChange={handleChange} />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipe;
