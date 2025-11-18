import { useState } from "react";
// 내가 만든 데이터 저장소 import
import { UserContext } from "./Context/userContext";
import Header from "./Context/component/Header";

export default function UserApp(){
    // 부모 컴포넌트
    // 공유하고 싶은 데이터 상태변수로 지정
    const[username, setUsername]=useState('홍길동');
    console.log('UserContext.Provider에 전달될 값: ', {username, setUsername})

    // provider로 감싸서 전역 데이터(username, setUsername)값을 전달한다.
    return(
        <UserContext.Provider value={{username, setUsername}}>
            <div>
                <h2>Context API 기본예제</h2>
                <Header />
            </div>
        </UserContext.Provider>
    )
}