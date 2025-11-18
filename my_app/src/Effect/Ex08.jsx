import React, { useState, useEffect } from "react"

export default function Ex08(){
    const[num1, setNum1]=useState('');
    const[num2, setNum2]=useState('');
    let result = 0;

    const handleInput1 = (e) => {
         setNum1(e.target.value);
    };
    const handleInput2 = (e) => {
         setNum2(e.target.value);
    };
    result = num1*num2;

    useEffect(()=>{
        num1!='' && num2!=''? 
        console.log(`${num1} x ${num2} = ${result}`)
        :null;
    },[num1, num2, result])

    return(
        <>
            <h2>곱셈 계산기</h2>
            <p><label>첫 번째 숫자: </label><input type="text" value={num1} onChange={handleInput1}/></p>
            <p><label>두 번째 숫자: </label><input type="text" value={num2} onChange={handleInput2}/></p>
            <h3>결과: 콘솔을 열면 과정도 확인할 수 있음.</h3>
            <p style={{fontSize:'80px',fontWeight:'400', color:"blueviolet", margin:'0'}}>{result}</p>
        </>
    )
}