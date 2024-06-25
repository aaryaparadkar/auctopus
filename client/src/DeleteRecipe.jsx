// src/components/DeleteRecipe.js
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteRecipe = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/recipes/${id}/`)
      toast.error('Data deleted successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipe;
