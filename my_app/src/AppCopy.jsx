import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseProduct from "./Pages/Fake/Data";
import Fakestore from "./Pages/Fake/Fakestore";
import FakestoreDetail from "./Pages/Fake/FakestoreDetail";
import "./app.css"

function App() {
  const { data } = UseProduct(); // ✅ 이 훅이 자체적으로 데이터 불러옴

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Fakestore data={data} />} 
        />

        <Route 
          path="/product/:id" 
          element={<FakestoreDetail data={data} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
