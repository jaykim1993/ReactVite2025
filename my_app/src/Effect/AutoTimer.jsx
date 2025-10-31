import React, { useState, useEffect } from "react";

export default function  AutoTimer() {
  const [count, setCount] = useState(0);      // 경과 시간
  const [isRunning, setIsRunning] = useState(false); // 타이머 작동 여부

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
    }, [isRunning]);

    // ▶️⏸️ 버튼 토글
    const handleToggle = () => setIsRunning(prev => !prev);

    // 🔁 리셋 버튼
    const handleReset = () => {
        setIsRunning(false);
        setCount(0);
    };

    // 🕒 시간 포맷 (HH:MM:SS)
    const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
    };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>⏱️ Auto Timer</h2>
      <p style={{ fontSize: "1.5rem" }}>{formatTime(count)}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleToggle}>
          {isRunning ? "⏸️" : "▶️"}
        </button>
        <button onClick={handleReset}>🔁</button>
      </div>
    </div>
  );
}



//   | 기능                         | 설명                                     
//   | ---------------------------- | -------------------------------------- 
//   | `isRunning`                  | 타이머 동작 중인지 여부를 나타내는 boolean state      
//   | `useEffect`                  | `isRunning`이 `true`일 때만 interval 실행    
//   | `clearInterval(timer)`       | `isRunning`이 false가 되거나 컴포넌트가 사라질 때 정리 
//   | `setCount(prev => prev + 1)` | 이전 값을 기준으로 안전하게 카운트 증가                 
//   | 버튼 `disabled` 속성          | 중복 클릭 방지 (시작 중엔 시작 버튼 비활성화 등)          
