import React, { useState } from "react";

export default function Exstate15() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);


  // 현재 시간 보이기 컴포넌트
  const Update = () => {
    setName('이순신')
    setAge('30')
  };


  return (
    <div>
      <button type="button" onClick={Update}>정보 변경</button>
      <p>{name} {age}</p>
    </div>
  );
}

