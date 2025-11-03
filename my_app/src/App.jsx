import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from './Pages/Recipes/RecipeList';
import RecipeDetail from './Pages/Recipes/RecipeDetail';
import UseProduct from './Pages/Recipes/RecipeData'; //  커스텀 훅
import "./app.css"

function App() {
  const { data } = UseProduct();


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList data={data} />} />
        <Route path="/product/:id" element={<RecipeDetail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
