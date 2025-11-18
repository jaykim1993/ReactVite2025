import React,{useState} from "react";

export default function Exstate04(){
    const [count, setCount] = useState(0)
    
    const NumCounter =()=> {
        setCount(count+1)
    }
    return(
        <div style={{width:'200px'
        ,height:'200px'
        ,border:'1px solid black'
        ,borderRadius:'10px'
        ,lineHeight:'20px'
        }}>
            <p style={{fontSize:'20px', marginTop:'40px'}}>👍🏿 {count}</p>
            <button type="button" onClick={NumCounter} style={{display:'block', width:'100px', margin:'10px auto', border:'none', outline:'none'}}>
                <h2>Like</h2>
            </button>
        </div>
    )
}

// style={{ backgroundColor: color }} 
// => “style 속성에 { backgroundColor: color }라는 JS 객체를 전달하겠다.”