import React, { useState } from "react";
import './common.css';


export default function ModalChange() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <div>
                <button type="button" onClick={()=>setIsOpen(true)}>모달열기</button>
                {isOpen && <div>모달 내용</div>}
                {isOpen && <button type="button"onClick={()=>setIsOpen(false)}>닫기</button>}
            </div>
        </>
    )
}