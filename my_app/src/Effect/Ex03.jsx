import React, { useState, useEffect } from "react"

export default function Ex03(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('현재 카운트: ' + count)
    },[count])
const minusHandler =()=>{
    setCount(count-1);
}
const plusHandler =()=>{
    setCount(count+1);
}


    return(
        <>
            <h2>Counter with useEffect</h2>
            <p>{count}</p>
            <button type="button" onClick={minusHandler}>-</button>
            <button type="button" onClick={plusHandler}>+</button>
            <p>콘솔을 확인하세요! 카운터가 변경될때마다 로그가 출력됩니다.</p>
        </>
    )
}