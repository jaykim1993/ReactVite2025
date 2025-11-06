import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginProvider from "./context/LoginContext"
import PersonalProvider from "./context/PersonalContext"
import './App.css'

import Header from "./common/Header/Header"
import Home from "./pages/Home/Home"
import MealDetail from "./pages/Meals/MealDetail"
import MealsList from "./pages/Meals/MealsList"
import UseProduct from "./common/UseProduct" 
import Footer from "./common/Footer/Footer"
import Login from "./common/Login/Login"

function App() {
  const { data } = UseProduct();

  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <PersonalProvider data={data}>
            <Header />
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/menus" element={<MealsList data={data} />} />
              <Route path="/detail/:id" element={<MealDetail data={data} />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </PersonalProvider>
        </LoginProvider>
      </BrowserRouter>
    </>
  )
}

export default App
