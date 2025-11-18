// useContext: Context의 값을 가져올 수 있는 react hook
import { useContext } from "react";
// Link: 페이지 이동을 위한 React Router 컴포넌트
import { Link } from 'react-router-dom';
// 내가 만든 저장소 데이터를 import 하기
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    // useContext(AuthContext)를 이용해 전역 데이터 읽음
    const { user, logout } = useContext(AuthContext);


    return (
        <header>
            <h1>Context 인증 실습</h1>
            {/* 홈 링크 */}
            <Link to='/'><button>홈 페이지</button></Link>
            <div>
                {/* user 값 존재하지 않음
                    로그아웃 상태이며 로그인 페이지로 이동하는 링크*/}
                <Link to='/login'><button>로그인 페이지</button></Link>
            </div>

        </header>
    );
}