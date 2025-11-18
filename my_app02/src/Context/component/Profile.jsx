import { useContext } from "react";
// 내가 만든 UserContext 반드시 import한다.
// 부모에서 보낸 데이터를 꺼내서 사용할 수 있다.
import { UserContext } from "../userContext";

export default function Profile(){
    // useContext로 값 불러와서 사용 {받아올 데이터는 중괄호 안에 입력}
    const {username, setUsername} = useContext(UserContext)

    return(
        <div>
            <p>현재 사용자 : {username}</p>
            <button type="button" onClick={()=>setUsername('이순신')}>
                    이름 바꾸기
            </button>
        </div>
    )
}