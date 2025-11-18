import React,{useState} from "react";

export default function Exstate02(){
    const [output, setOutput] = useState()
    
    const inputHandler =(e)=> {
        // onChange 함수안에 e.target.value 써야 함
        // onKeyUp 써도 됨
        setOutput(e.target.value)
    }
    return(
        <div style={{width:'100px'
        ,height:'100px'
        ,border:'1px solid black'}}>
            {/* onChange 함수안에 e.target.value 써야 함 */}
            <input type="text" onChange={inputHandler} placeholder="입력하세요" style={{display:'block', width:'80px', margin:'10px auto'}}/>
            <p>{output}</p>
        </div>
    )
}