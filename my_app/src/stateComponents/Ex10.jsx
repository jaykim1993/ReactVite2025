import React,{useState} from "react";

export default function Exstate10(){
    const [output, setOutput] = useState(0)
    const Minus =()=> {
        output === 0? alert('수량은 0개 이상 선택하세요'):setOutput(output-1)
    }
    const Plus =()=> {
        output === 5? alert('한개 수량은 5개입니다'):setOutput(output+1)
    }
    return(
        <div style={{width:'200px', height:'200px', border:'1px solid black'}}>
        <p style={{marginTop:'70px'}}>
            <button type="button" onClick={Minus} style={{border:'none', outline:'none', backgroundColor:'inherit'}}>-</button>
            {output}
            <button type="button" onClick={Plus} style={{border:'none', outline:'none', backgroundColor:'inherit'}}>+</button>
        </p>
        </div>
    )
}

