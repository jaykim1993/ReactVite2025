import { Link } from 'react-router-dom'
import "./Login.style.css";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function Login() {
    const { userID, userPW, login } = useContext(LoginContext);

    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");

    const submitHandler = (e) => {
        // 기본 폼 제출 시 새로고침 막는 코드
        e.preventDefault();
        // 입력값이 공백이면 alert
        if (inputID.trim() === "" || inputPW.trim() === "") {
            return alert("Check your ID or PASSWORD");
        }

        // 로그인 후 전역 user 업데이트
        login(inputID, inputPW);
        setInputID("");
        setInputPW("");
    };
    console.log(userID)
    console.log(userPW)
  return (
    <div className='wrap'>
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <ul>
                    <li>
                        <input 
                            className='inputbox'
                            type="text"
                            placeholder="아이디"
                            value={inputID}
                            onChange={(e) => setInputID(e.target.value)}
                        />                    
                    </li>
                    <li>
                        <input
                            className='inputbox'
                            type="password"
                            placeholder="비밀번호"
                            value={inputPW}
                            onChange={(e) => setInputPW(e.target.value)}
                        />                    
                    </li>
                    {/* <li><input type='checkbox'>아이디 저장</input></li> */}
                    <li>
                        <button className='login-btn' type='submit'>
                            로그인
                        </button>
                    </li>
                </ul>
                
            </form>
            <div className='login-bottom'>
                <button className='bottom-btn'>아이디 찾기</button>
                <button className='bottom-btn'>비밀번호 찾기</button>
                <button className='bottom-btn'>회원가입</button>
            </div>
        </div>
    </div>
  )
}