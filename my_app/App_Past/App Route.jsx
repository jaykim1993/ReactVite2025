import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./app.css"

// import UseProduct from "./Pages/Fake/Data";
// import Fakestore from "./Pages/Fake/Fakestore";
// import FakestoreDetail from "./Pages/Fake/FakestoreDetail";

import RecipeList from '../src/Pages/Recipes/RecipeList';
import RecipeDetail from '../src/Pages/Recipes/RecipeDetail';
import UseProduct from '../src/Pages/Recipes/RecipeData'; //  커스텀 훅

function App() {
  const { data } = UseProduct();


  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route 
    //       path="/" 
    //       element={<Fakestore data={data} />} 
    //     />

    //     <Route 
    //       path="/product/:id" 
    //       element={<FakestoreDetail data={data} />} 
    //     />
    //   </Routes>
    // </BrowserRouter>   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList data={data} />} />
        <Route path="/product/:id" element={<RecipeDetail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
