import React,{useState} from "react";
// useState() 훅을 import 한다.

export default function Counter02(){
    console.log("1. 컴포넌트 마운트 - 함수 실행 됨");
    // const [변수명, set변수명] = useState(초기값)
    const [count, setCount] = useState(0)
    console.log("2. useState() 호출 - 초기값 0", count);
    console.log("3. 초기 렌더링 중... 화면에 count 표시 됨");
    // const onClickCount =()=> {
    //     setCount(count+1)
    // } console찍기 위해 함수 비활성화 해놓음
    return(
        <>
            <p>현재 카운트 : {count} </p>
            <button type="button" onClick={()=>{
                console.log("4. 이벤트 발생 - setCount가 실행 요청 받음");
                setCount(count +1)
                console.log("5. setCount 호출 후 비동기 상태로 대기중");
                }}>+1</button>
        </>
    )
}

// 두번 도는 이유: 개발 모드(npm start, vite dev 등) 
// React.StrictMode가 부작용 검출을 위해 마운트를 2번 호출 
// (배포 시에는 1번만 실행됨)