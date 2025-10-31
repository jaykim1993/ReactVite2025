import React, { useState, useEffect } from "react"

export default function Ex05(){
    const[inputValue,setInputValue]=useState('');
    const [title, setTitle] = useState('제목없음');
    
    // title 값이 바뀔 때만 브라우저 탭 제목 변경
    useEffect(() => {
        title.trim()===''?
        alert('빈값입니다.'):
        document.title = title;
    }, [title]);

    // 1. 상태 업데이트
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // 2. Enter 키 입력 시 제목 확정
    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
        setTitle(e.target.value);
        }
    };

  return (
    <>
      <h2>Title Generator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="제목 입력"/>
            <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!</p>
        </>
    )
}