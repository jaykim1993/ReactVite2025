import React, { useState } from "react";
import './common.css';

export default function OnToggle() {
    const [open,setOpen] = useState(false);
    
    return(
        <div style={{padding:'20px'}}>
            <Child OnToggle={()=> setOpen(true)}/>
            {open &&(
                <div>
                    <h2>모달창입니다.</h2>
                    <button onClick={()=>setOpen(false)}>닫기</button>
                </div>
            )}
        </div>
    )
}

// 자식에게 OnToggle 이라는 명칭으로 전달
function Child({OnToggle}){
    return(
        <button onClick={OnToggle}>모달 열기</button>
    )
}