import { useEffect, useState } from "react";
export default function UserList() {
    // 사용자 목록을 담을 sate 추가
    const[user,setUser]=useState([]);
    useEffect(()=> {
        // 1. fetch() 이용해서 컴포넌트가 처음 랜더링 될때 실행 
        // JSON을 가지고 옴
        fetch("https://jsonplaceholder.typicode.com/users")
        // 2. 서버에서 응답(Response) 받으면 JSON으로 변환
        .then(res => res.json())
        // 3. 변환된 데이터를 users 상태에 저장
        .then(data => setUser(data));

    }); // 4. 마운트 시 1회만 반복되게 의존성 빈배열을 생성
    console.log(user)
    return(
        <ul>
            {user.map((indi) => (
                <li key={indi.id}>{indi.name}</li>
            ))}
        </ul>
    )
}



