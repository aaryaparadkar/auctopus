import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateRecipe from './CreateRecipe'
import DeleteRecipe from './DeleteRecipe'
import EditRecipe from './EditRecipe'
import RecipeList from './RecipeList'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path='/create' element={<CreateRecipe />} />
          <Route path='/edit/:id' element={<EditRecipe />} />
          <Route path='/delete/:id' element={<DeleteRecipe />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
