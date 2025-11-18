import React,{useState} from "react";

export default function Exstate07(){
    const [color, setColor] = useState('red')
    const ClickHandler =()=> {
        setColor(
            color === 'red'? 'green':color === 'green'? 'blue':'red'
        )
    }

    return(
        <div style={{width:'100px', height:'100px', backgroundColor:color}}>
        <button type="button" onClick={ClickHandler} style={{border:'none', outline:'none', backgroundColor:'inherit'}}>Color Change</button>
        </div>
    )
}
