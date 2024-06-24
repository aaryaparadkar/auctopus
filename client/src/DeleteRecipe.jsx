// src/components/DeleteRecipe.js
import React from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DeleteRecipe = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/recipes/${id}/`)
      .then(response => {
        history.push('/recipes');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipe;
