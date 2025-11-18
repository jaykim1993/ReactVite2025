import { useState, useEffect } from "react";
import UserList from "./UserList";
export default function ExJ04() {
  const[data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((result) => {
      setData(result);
      console.log(data)
      })
      
     }, []);

  return (
    <>
      <h1>컴포넌트 분리 연습</h1>
      <UserList
      data={data}
      />
    </>
  );
}
