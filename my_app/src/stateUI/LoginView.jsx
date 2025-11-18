import React, { useState } from "react";
import './common.css';


export default function LoginView() {
    const [isLogin, setIsLogin] = useState(false)
    return(
        <>
            <div>
                {isLogin ? <h1>welcome back!</h1> : <h1>please login</h1>}
                <button onClick={()=>setIsLogin(!isLogin)}>{isLogin ? '로그아웃' : '로그인'}</button>
            </div>
        </>
    )
}

// 지금처럼 간단한 식은 태그안에 직접 삽입 권장