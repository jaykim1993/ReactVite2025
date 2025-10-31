import React, { useEffect } from "react"
export default function ChildEx06(){
     useEffect(()=>{
        console.log('컴포넌트가 마운트되었습니다');
        return()=>{console.log('컴포넌트가 언마운트되었습니다');};
    },[]);
    
    return(
        <>
            <h2>안녕하세요! 저는 토글 가능한 컴포넌트 입니다!</h2>
        </>
    )
}

// showText = true → 마운트 → “컴포넌트가 마운트되었습니다”
// showText = false → 언마운트 → “컴포넌트가 언마운트되었습니다”
