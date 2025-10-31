import { useEffect, useState } from "react";

export default function Eff09() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // 데이터 중 앞의 5개만 저장
        setUser(data.slice(0, 5));
      });
  }, []); 

  return (
    <>
      <h2>데이터 불러오기</h2>
      <ul>
        {user.map((indi) => (
          <li key={indi.id}>{indi.title}</li>
        ))}
      </ul>
    </>
  );
}
