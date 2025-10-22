import React,{useState} from "react";

export default function Exstate06(){
    const [size, setSize] = useState(16)
    
    const TextHandler =()=> {
        setSize(size+15)
    }
    return(
        <div>
            <button type="button" onClick={TextHandler} style={{display:'block', width:'100px', margin:'0px auto', border:'none', outline:'none'}}>
                <h3 style={{fontSize:size}}>🌟</h3>
            </button>
        </div>
    )
}
