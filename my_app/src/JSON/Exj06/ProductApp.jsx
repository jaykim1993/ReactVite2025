import { useState, useEffect } from "react";
import ProductList from "../Exj06/ProductList";
import "../Exj06/Exj06.css"

export default function ExJ05() {
  const [items, setItems] = useState([]);

  // 1) JSONPlaceholder에서 20개 받아오기
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => {
        setItems(result.slice(0, 20)); 
      });
  }, []);
  console.log(items);

  return (
    <>
        <h1>상품 목록</h1>
        <div className="wrap">
            <ProductList 
            items = {items}
            />
        </div>
    </>
    
  );
}

