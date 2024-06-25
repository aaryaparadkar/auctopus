import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecipeCard from './components/RecipeCard';
import { useNavigate } from 'react-router-dom';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipes/');
        console.log('Fetched data: ', response.data);
        setRecipes(response.data);
        toast.success('Data fetched successfully', {
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
        toast.error('Failed to fetch data', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/recipes/${id}/`);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      toast.success('Recipe deleted successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete recipe', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleAdd = () => {
    navigate('/create')
  }

  return (
    <>
      <ToastContainer />
      <div className="flex flex-wrap justify-center">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
          ))
        ) : (
          <div className="text-center mt-10">
            <p className="text-xl text-gray-700">No recipes available.</p>
            <button className='bg-blue-300 rounded-2xl text-xl border-white p-2 hover:bg-blue-400' onClick={handleAdd}>Add Recipe</button>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeList;
