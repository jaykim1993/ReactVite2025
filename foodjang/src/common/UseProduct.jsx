import { useState, useEffect } from "react";

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
