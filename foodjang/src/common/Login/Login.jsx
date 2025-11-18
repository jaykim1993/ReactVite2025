import { Link } from 'react-router-dom'
import "./Login.style.css";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { userID, userPW, login } = useContext(LoginContext);

    const [inputID, setInputID] = useState("");
    const [inputPW, setInputPW] = useState("");
    const navigate = useNavigate()
    const submitHandler = (e) => {
        // 기본 폼 제출 시 새로고침 막는 코드
        e.preventDefault();
        // 입력값이 공백이면 alert
        if (inputID.trim() === 'admin' && inputPW.trim() === '1234') {
            // 로그인 후 전역 user 업데이트
            login(inputID, inputPW);
            alert(`Welcome ${inputID.toUpperCase()}!`);
            navigate('/');
        } else {
            alert("Check your ID or PASSWORD");
            setInputID("");
            setInputPW("");
        }
    };
    console.log('저장된 ID: ', userID)
    console.log('저장된 PW: ', userPW)

    const homeBtnHandler =()=>{
        navigate('/');
    }
  return (
    <div className='wrap'>
        <div className='overlay'>
            <div className='login-container'>
                <button className='homeBtn' onClick={homeBtnHandler}>×</button>
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
                    <Link to={'/signup'}><button className='bottom-btn'>회원가입</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}