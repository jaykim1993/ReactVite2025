import React,{useState} from "react";

export default function Exstate01(){
    const [toggle, setToggle] = useState('안녕하세요')
    
    const toggleHandler =()=> {
        // toggle==='안녕하세요'?setToggle('Hello'):setToggle('안녕하세요')
        setToggle(toggle==='안녕하세요'?'HELLO':'안녕하세요')
    }
    return(
        <div style={{width:'100px'
        ,height:'100px'
        ,border:'1px solid black'}}>
            <p>{toggle}</p>
            <button type="button" onClick={toggleHandler}>Toggle</button>
        </div>
    )
}