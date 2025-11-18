import React, { useState } from "react";
import TodoChild from "./TodoListChild.jsx";

export default function TodoList() {
  const [list, setList] = useState([
    { id: 0, text: "React 공부하기", completed: false },
    { id: 1, text: "운동하기", completed: true },
    { id: 2, text: "장보기", completed: false },
  ]);
  const [inputText, setInputText] = useState("");

  // 인풋값 받기 (추가기능)
  const AddText = (e) => {
    setInputText(e.target.value);
  };

  // 엔터키 (추가기능)
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      AddList();
    }
  };

  // 포스트 추가
  const AddList = () => {
    if (inputText.trim() === "") {
      return alert("할일을 입력하자!");
    }

    const newItem = { id: Date.now(), text: inputText, completed: false };
    setList([newItem, ...list]);
    setInputText("");
  };

  // 수행 완료/취소 토글
  const Done = (index) => {
    const newList = list.map((item, idx) =>
      idx === index ? { ...item, completed: !item.completed } : item
    );
    setList(newList);
  };

  return (
    <>
      <TodoChild
        // 보낼 변수
        list={list}
        inputText={inputText}
        // 보낼 컴포넌트
        EnterPress={EnterPress}
        AddText={AddText}
        AddList={AddList}
        Done={Done}
      />
    </>
  );
}
