import { useState, useEffect } from "react";

// 커스텀 훅: RecipeList API에서 제품 데이터 가져오기
export default function UseMenu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.recipes);
      })
  }, []);

  return { data };
}
