import React, { useState } from "react";

export default function Exstate16() {
  const [user, setUser] = useState({name: '철수', age:25});



  // 나이 한살 먹기
  const Update = () => {
    setUser({name: '철수', age:user.age+1})
  };

  return (
    <div>
      <button type="button" onClick={Update}>나이 + 1</button>
      <p>{user.name} - {user.age}</p>
    </div>
  );
}

