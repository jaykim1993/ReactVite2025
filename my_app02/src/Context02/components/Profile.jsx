// useContext: Context의 값을 가져올 수 있는 react hook
import { useContext } from "react";
// Link: 페이지 이동을 위한 React Router 컴포넌트
import { Link } from 'react-router-dom';
// 내가 만든 저장소 데이터를 import 하기
import { AuthContext } from "../context/AuthContext";


export default function Profile(){
    const {user} = useContext(AuthContext)
    if(!user){
        return (
            <div className="page-box">
                <p>로그인이 필요합니다.</p>
                {/* 로그인 페이지로 이동하는 링크 */}
                <Link to={'/login'}>로그인 하러 가기</Link>
            </div>
        )
    }
    return(
        <div className="page-box">
            <h1>프로필 페이지</h1>
            {/* 로그인 사용자 이름 출력 */}
            <p>안녕하세요, {user} 님!</p>
            <p>오늘도 좋은 하루 되세요~</p>
        </div>
    )
}