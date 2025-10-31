import { useState, useEffect } from "react";

export default function ExJ01(){
    // 1. 상태변수
    // 2. useEffect
    // 3. UI에 어떻게 출력할 것인지
    // 4. 컴포넌트 분리 유무
    // 5. JSON을 이용해 데이터를 가져오기 해야하는 상황도 고려
        const[userId,setUserId]=useState(1);
        const[user,setUser]=useState(null);

        const JSONData=()=>{
            // URL 경로에 들어가는 동적 파라미터입니다.
            // 예를 들어 userId가 3이라면 실제 요청 주소는
            // https://jsonplaceholder.typicode.com/users/3 이 됩니다.
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })
            .finally(() => {
                console.log('로딩완료')
            })
        }

        useEffect(()=>{
            JSONData()
            if(user)console.log(user)
        },[userId])
        
        
        const idCountHandler =()=> {
            if(userId<10)setUserId(userId+1)
        }




        return(
            <>
               <h2>현재 선택된 사용자 ID:</h2>
               <h2>{userId}</h2>
               <button onClick={idCountHandler}>다음 사용자 보기</button>
               {user && 
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>}
            
            </>
        )
    }


