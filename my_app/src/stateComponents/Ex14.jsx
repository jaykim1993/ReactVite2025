import React, { useState } from "react";

export default function Exstate14() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());


  // 현재 시간 보이기 컴포넌트
  const Resetter = () => {
    setTime(new Date().toLocaleTimeString())
  };


  return (
    <div>
      <button type="button" onClick={Resetter}>
        갱신
      </button>
      <p>{time}</p>
    </div>
  );
}

