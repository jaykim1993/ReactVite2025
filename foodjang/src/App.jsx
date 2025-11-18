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
import Wishlist from "./pages/Wishlist/Wishlist"
import Signup from "./pages/Signup/Signup"


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
              <Route path="/menus" element={<MealsList />} />
              <Route path="/detail/:id" element={<MealDetail data={data} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/wish" element={<Wishlist />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
          </PersonalProvider>
        </LoginProvider>
      </BrowserRouter>
    </>
  )
}

export default App
