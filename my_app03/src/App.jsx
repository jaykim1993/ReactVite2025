// import Counter from './ReduxToolkit/counter'
// import Cart from "./cartEx/Cart"
// import Test from "./test"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cartpage from './pages/Cartpage'
import Section from "./pages/Section"
import Header from "./components/Header"
function App() {

  return (
    <>
      {/* <Counter /> */}
      {/* <Cart /> */}
      {/* <Test/> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Section/>}/>
          <Route path="/cart" element={<Cartpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
