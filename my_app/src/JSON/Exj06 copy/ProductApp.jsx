import { useState, useEffect } from "react";
import ProductList from "../Exj06/ProductList";
import "../Exj06/Exj06.css"

export default function ExJ05() {
  const [items, setItems] = useState([]);

  // 1) JSONPlaceholder에서 20개 받아오기
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        const dataslice = data.map((product)=>({
          id:product.id,
          name:product.title.slice(0,15),
          price:(Math.floor(Math.random()*1000)),
          img:`http://picsum.photos/150?random=${product.id}`
        }))
        setItems(dataslice); 
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

