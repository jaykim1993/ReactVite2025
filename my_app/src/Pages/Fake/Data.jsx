import { useState, useEffect } from "react";

// 커스텀 훅: fakestore API에서 제품 데이터 가져오기
export default function UseProduct() {
  const [data, setData] = useState([]);       // 제품 데이터


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
  }, []);

  return { data };
}
