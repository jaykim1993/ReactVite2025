import React, { useState, useEffect } from "react"

export default function Ex01(){
        // useState()=> 랜더, 업데이트 필요
        // useEffect()=> 랜더 이외의 작업 && 네트워크에서 자료 가져오는 일..
    useEffect(()=>{
        console.log('컴포넌트가 마운트되었습니다.')
    },[])
    return(
        <>
            <h1>useEffect 기본 예제</h1>
            <h3>F12를 눌러 콘솔을 확인해보세요!</h3>
            <p>"컴포넌트가 마운트외었습니다!" 메시지가 출력됩니다.</p>
        </>
    )
}

// useEffect(() => {...}, [])          | 처음 렌더링 시 1회     
// useEffect(() => {...}, [의존성배열]) | 특정 의존성배열이 변경 시마다 
// useEffect(() => {...})              | 모든 렌더링마다        
// return () => {...}                  | 컴포넌트 언마운트 시 정리용 