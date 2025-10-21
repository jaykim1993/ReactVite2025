import React,{useState} from "react";
// useState() 훅을 import 한다.

export default function Counter02(){
    // const [변수명, set변수명] = useState(초기값)
    const [count, setCount] = useState(0)
    const onClickCount =()=> {
        setCount(count+1)
    }
    return(
        <>
            <p>현재 카운트 : {count} </p>
            <button type="button" onClick={onClickCount}>+1</button>
        </>
    )
}

