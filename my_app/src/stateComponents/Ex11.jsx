import React,{useState} from "react";

export default function Exstate11(){
    const [color, setColor] = useState('')
    const ColorChanger =(e)=> {
        setColor(e.target.value)
    }

    return(
        <div style={{width:'200px', height:'200px', border:'1px solid grey', boxShadow:'0 0 10px rgba(0,0,0,0.3)', borderRadius:'50%',
        backgroundColor:color}}>
        <input type="text" onChange={ColorChanger} placeholder="예: pink" style={{display:'block', width:'50px', margin:'80px auto', outline:'none'}}/>
        </div>
    )
}

