import React, { useState } from "react";
import './common.css';

export default function PromptChange() {
    const [name, setName] = useState('');
    const ClickHandler =()=> {
        const userName = prompt("이름을 입력하세요");
        if(userName){
            setName(userName);
        } else {
            alert('이름 입력이 취소되었습니다.'); 
            prompt("이름을 입력하세요", "홍길동");
        }
    }
    return(
        <div style={{padding:'20px'}}>
            <h2>이름 : {name}</h2>
            <button onClick={ClickHandler}>이름 입력하기</button>
        </div>
    )
}

// 지금처럼 간단한 식은 태그안에 직접 삽입 권장