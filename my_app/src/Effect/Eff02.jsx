import React, { useState, useEffect } from "react"

export default function Eff02(){
    const[count, setCount]=useState(0);
        // Effect의 의존성을 지정하지 않고 작성
        // useEffect 끝에 ,[] 넣지 않으니 버튼 클릴때마다 재랜더링 됨.
    useEffect(()=>{
        console.log('렌더링 발생')
    })
    return(
        <>
           <p>카운트</p>
           <button onClick={()=>setCount(count+1)}>+1</button>
        </>

    )
}