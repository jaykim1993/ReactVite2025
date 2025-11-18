import React, { useState } from "react";

export default function Exstate13() {
  const [output, setOutput] = useState("");

  // 입력 내용 변경 시 실행
  const OutputRender = (e) => {
    setOutput(e.target.value);
  };

  // 초기화 함수
  const Resetter = () => {
    setOutput(""); // 입력 내용 비우기
  };

  // 엔터키 감지
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 엔터로 인한 폼 제출 방지
      Resetter();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={output} //input의 현재 값(state)을 연결
        onChange={OutputRender}
        onKeyUp={EnterPress} // 엔터키 이벤트 연결
        placeholder="입력하세요"
        style={{ outline: "none" }}
      />
      <button type="button" onClick={Resetter}>
        RESET
      </button>
      <p>{output}</p>
    </div>
  );
}

// e.preventDefault(); 
    // => 엔터로 인한 폼 제출 방지

// <input> 내 중요포인트
    // value={output} 
        // => input의 현재 값(state)을 연결
    // onKeyUp={EnterPress} 
        // => 엔터키 이벤트 연결