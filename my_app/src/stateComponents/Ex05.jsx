import React,{useState} from "react";

export default function Exstate05(){
    // const [visibility, setVisibility] = useState('1')
    const [visibility, setVisibility] = useState(true)
    
    const ImgHandler =()=> {
        // setVisibility(visibility==='1'?'0':'1')
        setVisibility(!visibility)
    }
    return(
        <div style={{width:'200px'
        ,height:'200px'
        ,border:'1px solid black'
        ,borderRadius:'10px'
        ,lineHeight:'20px'
        }}>
            <button type="button" onClick={ImgHandler} style={{display:'block', width:'100px', margin:'0px auto', border:'none', outline:'none'}}>
                <h3>이미지 숨기기</h3>
            </button>
            {/* <img src="./public/vite.svg" style={{opacity:visibility, width:'30px', marginTop:'20px'}}/> */}
            {visibility && <img src="./public/vite.svg" style={{width:'30px', marginTop:'20px'}}/>}
            
        </div>
    )
}

// 내 방식 주석 처리
// 선생님 방식 && 연산자 + true