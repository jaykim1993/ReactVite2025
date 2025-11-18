import React,{useState} from "react";

export default function Exstate09(){
    const [output, setOutput] = useState(0)
    const ClickHandler =()=> {
        setOutput(output+1)
    }

    let evenText = output%2===0?'짝수입니다':'';

    return(
        <div style={{width:'200px', height:'200px', border:'1px solid black'}}>
        <p style={{marginTop:'40px'}}>{output}</p>
        <button type="button" onClick={ClickHandler} style={{border:'none', outline:'none', backgroundColor:'inherit'}}>+</button>
        <p>{evenText}</p>
        </div>
    )
}

