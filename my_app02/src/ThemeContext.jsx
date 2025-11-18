import { useState } from "react";
// createContext => 데이터 공용 저장 장소 생성하는 라이브러리
import { createContext } from "react";

// 1. 데이터 저장소 context 생성
// export 필요
export const ThemeContext = createContext();

// 2. Provider 컴포넌트 정의
    // 공유데이터는 변수, 함수 모두 가능
export default function Themeprovider({children}) {
    // 2-a 전역변수 지정
     // Boolean: true - false 변수 선언
    const [theme, setTheme]=useState(false)
    // 2-b 업테이트용 토글 함수
     // prev 이전 값의 약어
    const toggleTheme =()=> {
        setTheme((prev) => (!prev))
    }

    return(
        // 공유할 데이터 - theme, toggleTheme
        // children 화면에 렌더링될 컴포넌트들 자체
            // <Header /> <Home /> <Footer />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}