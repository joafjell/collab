<<<<<<< HEAD
import './App.css';
import Main from './components/Main';
import './recipes.css';
import {Route, Routes} from 'react-router-dom';
import RecipePage from './components/RecipePage';
//import recipes from './resources/recipes';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
=======
import './App.css'
import './recipes.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'
import RecipePage from './components/RecipePage'
//import recipes from './resources/recipes'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'
>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718

function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('chicken')

  const getRecipes = async() =>{
<<<<<<< HEAD
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=4eae8401&app_key=d6c330717f0d0a1aa99aaa43eec3eff4`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  useEffect(() =>{
    getRecipes()
  },[]) 

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main recipes={recipes} setSearch={setSearch} getRecipes={getRecipes}/>} />
        <Route path=':slug' element={<RecipePage  recipes={recipes}/>} />
      </Route>
    </Routes>
=======
    //Pass på at ID og KEY kommer fra riktig app i edmam, hvis dere har registrert at dere skal bruke recipe api så må app id og key være koblet til det og ikke food databse eller omvendt
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=52a150ec&app_key=ced7b20160d07136b580dc435e358b9f`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)

  
  }
  useEffect(() =>{
    getRecipes()
  },[])


  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Main recipes={recipes} setSearch={setSearch} getRecipes={getRecipes} />} />
          <Route path=':slug' element={<RecipePage recipes={recipes} />}/>
        </Route>
      </Routes>

>>>>>>> bb0879b543146cadc06b8a8f2dce657834801718
  );
}

export default App;
