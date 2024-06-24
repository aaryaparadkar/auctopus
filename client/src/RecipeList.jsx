import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast, Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import RecipeCard from './components/RecipeCard'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async() => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/recipes/')
        console.log('Fetched data: ', response.data)
        setRecipes(response.data)
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
        console.error(error)
      }
    }

    fetchRecipes()
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="flex flex-wrap justify-center">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
    </>
  )
}

export default RecipeList