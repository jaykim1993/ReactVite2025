import React, { useState, useEffect } from "react"

export default function Eff01(){
    // Effect의 의존성 빈배열 이용하여 한번만 실행
    useEffect(()=>{
        console.log('컴포넌트가 처음 나타났어요')
    },[])
    return(
        <>
            <h2> useEffect 기본 실행 </h2>
        </>

    )
}

// useEffect(() => {...}, [])      | 처음 렌더링 시 1회     
// useEffect(() => {...}, [state]) | 특정 state 변경 시마다 
// useEffect(() => {...})`         | 모든 렌더링마다        
// return () => {...}              | 컴포넌트 언마운트 시 정리용 