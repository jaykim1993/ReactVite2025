import React, { useEffect, useState } from "react";

export default function Ex09() {
    const [msgs, setMsgs] = useState([]);
    const [input, setInput] = useState('');


    const handleInput = (e) => {
        setInput(e.target.value);
    };
    
    const msgSubmit = () => {
        if (input.trim() === '') return; // 예외처리
        setMsgs((prev) => [...prev, input]); // 얕은 배열 따서 넣기
        setInput('');
    };
    
    useEffect(()=>{
        msgs!=''?
        console.log(`새 메시지: ${msgs[msgs.length-1]}`)
        :null;
    },[msgs])

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            msgSubmit();
        }
    };

    return (
        <>
        <h2>간단 메시지 입력기</h2>
        <input
            placeholder='메시지를 입력하세요'
            value={input}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
        />
        <button onClick={msgSubmit}>전송</button>
        <ul>
            {msgs.map((msg,index) => (
                <li key={index}>
                    {msg}
                </li>
            ))}
        </ul>
        </>
    );
}
