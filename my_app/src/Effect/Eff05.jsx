import React, { useState, useEffect } from "react"

export default function Eff05(){
    const[time,setTime]=useState(0)
    
    useEffect(() => {
    const timer = setInterval(() => setTime(exTime => exTime + 1), 1000);
    return () => clearInterval(timer);
    
    }, []);console.log(time)
    return(
        <div>
            <h1>⏲️{time}초 경과</h1>
        </div>
    )
}
// 의존성 배열을 빈배열로 놓음으로 최초 1회만 실행
//→ 이렇게 하면 타이머는 한 번만 생성되고,
// 이전 상태(prev)를 기준으로 안전하게 1초마다 증가합니다.

// 이렇게 하면 count 변수가 이전 렌더링의 값일 수 있음
// setInterval(()=> setTime(time+1),1000) <= 이존 state 변수 그대로
// return()=>{clearInterval(timer)};}) <= 의존 빈배열 없이