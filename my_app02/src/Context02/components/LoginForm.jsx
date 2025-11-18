// useContext: Context의 값을 가져올 수 있는 react hook
import { useContext, useState } from "react";
// Link: 페이지 이동을 위한 React Router 컴포넌트
import { Link } from 'react-router-dom';
// 내가 만든 저장소 데이터를 import 하기
import { AuthContext } from "../context/AuthContext";

export default function LoginForm(){
    // useContext(AuthContext)를 이용해 전역 데이터 읽음
    const {user, login, logout} = useContext(AuthContext)

    // 입력받는 값에 대한 상태변수 설정
    const [inputName, setInputName] = useState("");

    // 폼 제출 시 실행되는 함수
    const submitHandler = (e) => {
        // 기본 폼 제출 시 새로고침 막는 코드
        e.preventDefault();
        // 입력값이 공백이면 alert
        if (inputName.trim() === "") {
            return alert("이름을 입력하세요.");
        }
        // 로그인 후 전역 user 업데이트
        login(inputName);
        setInputName("");
    };

    return (
        <div className="page-box">
            {user ? (
                <>
                    <p>{user}님, 로그인되었습니다.</p>
                    <Link to="/profile">
                        <button>프로필로 이동</button>
                    </Link>
                    {/* 로그아웃 버튼 클릭 시 logout */}
                    <button type="button" onClick={logout}>로그아웃</button>
                </>
            ) : (
                <form onSubmit={submitHandler}>
                    <h1>로그인</h1>
                    <input
                        type="text"
                        placeholder="이름입력"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                    <button type="submit">로그인</button>
                </form>
            )}
        </div>
    );
}