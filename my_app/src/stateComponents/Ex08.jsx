import React,{useState} from "react";

export default function Exstate08(){
    const [output, setOutput] = useState('좋아요 👍')
    const ClickHandler =()=> {

        if(output ==='좋아요 👍'){
            setOutput( '싫어요 👎')
        }else{
            setOutput( '좋아요 👍')
        }
        // setOutput(output==='좋아요 👍'?'싫어요 👎':'좋아요 👍')
    }

    return(
        <div style={{width:'200px', height:'200px', border:'1px solid black'}}>
        <p style={{marginTop:'50px'}}>{output}</p>
        <button type="button" onClick={ClickHandler} style={{border:'none', outline:'none', backgroundColor:'inherit'}}>변경</button>
        </div>
    )
}

// if 문 굳이 사용해봄
    // if 문 엮으면 유사시 태그 내 붙여넣기가 힘들기에
    // 3항연산자로 만들것

    // for 문 엮으면 유사시 태그 내 붙여넣기가 힘들기에
    // .map()로 만들것