import { useState, useEffect } from "react";

export default function ExFetch(){
    // 1. 상태변수 
        // 로딩 중 표시, true면 로딩중이 뜬다 
        // => .finally()로 가면 false로 바뀌고 로딩 종료된다.
        const[loading,setLoading]=useState(true);
        // 가져온 데이터 저장 
        const[data,setData]=useState([]);
        // 에러 메세지 저장
        const[errMsg,setErrMsg]=useState(null);
    
    // 2. useEffect
        useEffect(()=>{
            console.log('데이터 요청 시작');
            // 1. fetch() 이용해서 컴포넌트가 처음 랜더링 될때 실행 
            fetch('https://jsonplaceholder.typicode.com/userss')
            // 2. 서버에서 응답(Response) 받으면 JSON으로 변환
            .then((res)=>{
                if(!res.ok) {
                    //HTTP 상태 코드 확인
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                // JSON 파싱(해석)
                return res.json();
            })
            // 3. 변환된 데이터를 users 상태에 저장
            .then((result) => {
                console.log('데이터:', result);
                setData(result); // 파싱된 데이터 변수내 저장
            })
            // 4. err 발생시 catch한다
            .catch((err) => {
                console.log('X 에러 발생: ', err);
                setErrMsg(err.message) // 에러 상태 저장
            })
            // 5. 성공/실패 관계없이 로딩 종료 여부 확인
            .finally(() => {
                console.log('요청완료');
                setLoading(false); //로딩 종료
            })
        },[]) // 의존성 빈배열: 한번만 실행

        if(loading)return<p>데이터 로딩 중</p>
        if(errMsg)return<p>X 에러: {errMsg}</p>

        return(
            <>
               <h2>사용자 목록</h2> 
               <ul>
                {data.map((data)=>(
                    <li key={data.id}>{data.name}</li>
                ))}
               </ul>
            </>
        )
    }


