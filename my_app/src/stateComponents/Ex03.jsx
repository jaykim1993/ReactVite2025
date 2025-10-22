import React,{useState} from "react";

export default function Exstate03(){
    const [color, setColor] = useState('red')
    
    const boxHandler =()=> {
        setColor(color==='red'?'blue':'red')
    }
    return(
        <div style={{width:'200px'
        ,height:'200px'
        ,backgroundColor:color}}>
            <button type="button" onClick={boxHandler} style={{bacdisplay:'block', width:'100px', margin:'10px auto', border:'none', outline:'none'}}>
                색 변경
            </button>
        </div>
    )
}
// color는 변수명이지 문자열이 아니기에
// 이미 자바스크립트 문법 안이기 때문에 중괄호를 또 쓸 필요가 없음.
// style={{ backgroundColor: color }} 
// => “style 속성에 { backgroundColor: color }라는 JS 객체를 전달하겠다.”