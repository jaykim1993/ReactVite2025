import { useContext, useState } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
    // id, pw 상태 저장 변수 생성
    const[id, setId] = useState('');
    const[pw, setPw] = useState('');
    const {login} = useContext(AuthContext);
    // useNavigate훅을 변수로 지정
    const navigate = useNavigate()
    const handleLogin = () => {
        if (id === 'admin' && pw === '1234') {
            login(id);
            alert(`${id}님 환영합니다.`);
            navigate('/');
        } else {
            alert('id, pw를 확인하세요');
        }
    };

    return(
        <>
            <h2>로그인 페이지</h2>
            <input type="text" placeholder="ID" value={id} onChange={id => setId(id.target.value)}/>
            <input type="password" placeholder="PW" value={pw} onChange={pw => setPw(pw.target.value)}/>
            <button type="button" onClick={handleLogin}>로그인</button>
        </>
    )
}