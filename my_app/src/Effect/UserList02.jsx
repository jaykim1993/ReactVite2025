import { useEffect, useState } from "react";
export default function UserList() {
    // 사용자 목록을 담을 sate 추가
    const[user,setUser]=useState([]);
    const[reload,setReload]=useState(false); // 버튼 클릭으로 새로고침 제어할 상태 변수
    const[isLoad,setIsLoad]=useState(false); // 데이터를 불러오는 중인지 여부를 확이할 상태 변수 
    useEffect(()=> {


        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data));
        setTimeout(()=>{
            setIsLoad(true)
            setIsLoad(false)
            , 3000})
    },[reload]); // reload값이 바뀔때마다 useEffect 재실행


    

    return(
        <>
            <button  onClick={()=> {setReload(!reload); setIsLoad(true);}}>다시 불러오기</button>
            {isLoad?
                <p>로딩중...</p>:
                <ul>
                    {user.map((indi) => (
                        <li key={indi.id}>{indi.name}</li>
                    ))}
                </ul> 
            }
        </>
        
    )
}



