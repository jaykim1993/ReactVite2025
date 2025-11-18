import { useState } from "react";
// 1. Context 생성
    // createContext()sms react 전역 저장소(공유 공간)을 만드는 함수 
    // 컴포넌트 트리 전체에 데이터를 전달할 수 있게 해준다.
import { createContext } from "react";
export const LoginContext = createContext();

// 2. Provider 정의
    // AuthContext 컴포넌트는 Context의 공급자(provider) 역할을 한다
    // App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달
    // value={{user, login, logout}}으로 값 공유
export default function LoginProvider({children}){
    // 상태 변수
    const[userID, setUserID]=useState(null);
    const[userPW, setUserPW]=useState(null);
    // 로그인 함수
    const login =(ID, PW)=> {
        setUserID(ID);
        setUserPW(PW);
    }
    // 로그아웃 함수
    const logout =()=> {
        alert("Successfully logged out.")
        setUserID(null);
        setUserPW(null);
    }
// 3. Provider: value 속성을 통해 하위 컴포넌트에 데이터를 공유
    // {children}은 그 내부에 포함된 컴포넌트를 의미한다.
    return(
        <LoginContext.Provider value={{userID, setUserID, userPW, setUserPW, login, logout}}>
            <div>
                {children}
            </div>
        </LoginContext.Provider>
    )
}