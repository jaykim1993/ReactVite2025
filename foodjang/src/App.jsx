import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Header from "./common/Header/Header"
import Home from "./pages/Home/Home"
import MealDetail from "./pages/Meals/MealDetail"
import MealsList from "./pages/Meals/MealsList"
import UseProduct from "./common/UseProduct" 
import Footer from "./common/Footer/Footer"

function App() {
  const { data } = UseProduct();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/menus" element={<MealsList data={data} />} />
          <Route path="/detail/:id" element={<MealDetail data={data} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
