import React, { useState, useEffect } from "react"

function Message(){

    useEffect(()=>{
        console.log('Message 컴포넌트 나타남')
        // 클린업 함수 => 언마운트 될 때 실행되는 
        // => 함수 업데이트 끝난 시점 이후
        return (()=> console.log('Message 컴포넌트 사라짐'))
    },[])
    
    return(
        <>
           <p>안뇽하세용</p>
        </>

    )
}

export default function Eff03(){
    const[show, setShow]=useState(false)
    return(
        <div>
            <button type="button" onClick={()=>setShow(!show)}>토글</button>
            {show && <Message />}
        </div>
    )
}