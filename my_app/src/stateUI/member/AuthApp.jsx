import React, { useState } from "react";
import  LoginForm  from "../member/LoginForm";
import  Message from "../member/Message";
import  SignupForm from "../member/SignupForm";


export default function AuthApp() {

    const[isLogin,setIsLogin]=useState(true);
    const[msg,setMsg]=useState('');

    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>🔌로그인/회원가입</h2>
                <Message msg={msg}/>
                {/* 회원가입 후 버튼 클릭하면 */}
                {/* 회원가입 완료! 환영합니다. {name}님! */}
                {/* 로그인 완료되면 */}
                {/* 환영합니다. {name}님! */}

                {isLogin ?  
                <LoginForm OnSuccess={(name)=> setMsg(`환영합니다. ${name}님!`)}/> : 
                <SignupForm OnSuccess={(name)=> setMsg(`회원가입 완료! 환영합니다. ${name}님!`)}/>
                }
                
                <button onClick={()=>{setIsLogin(!isLogin); setMsg('');}}>{isLogin?'회원가입':'로그인'}</button>
            </div>
        </>
    )
}

// 부모 컴포넌트
// 전체 로그인/회원가입 페이지의 '상태 전환' 담당
//isLogin, msg 상태를 관리
// 로그인, 회원가입 성공시 msg를 바꿈