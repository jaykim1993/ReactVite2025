import React, { useState, useEffect } from "react"

export default function Ex07(){
    const[time,setTime]=useState(new Date())
    const dayArray = ['일','월','화','수','목','금','토'];

    useEffect(()=>{
        let exTime;
        exTime = setInterval(() => {
        setTime(new Date());
         }, 1000);
        return () => clearInterval(exTime);
    }, []);





    // 숫자를 2자리 문자열로 만들어주는 함수
    const twoDigit = (num) => num<10 ? `0${num}` : num;
    const refineTime = 
    `${twoDigit(time.getHours())}:${twoDigit(time.getMinutes())}:${twoDigit(time.getSeconds())}`;

    // 요일 포함 날짜 출력
    const dayToday = dayArray[time.getDay()]; // 요일 찾아서 지정
    const dateToday = `${time.getFullYear()}년 ${twoDigit(time.getMonth()+1)}월 ${twoDigit(time.getDate())}일 ${dayToday}요일`
    const dateMethod = time.toLocaleDateString() // 현지 기준 맞춰진 포맷 인쇄

    return(
        <>
            <h2>DIGITAL CLOCK</h2>
            <h1>{refineTime}</h1>
            <p>{dateToday}</p>
            <p>{dateMethod}</p>
        </>
    )
}





    // // 더더더 정밀한 시계 만들기
    // useEffect(() => {
    // // 처음 렌더링 후, 다음 0.001초 단위로 동기화
    //     const tick = () => {
    //     setTime(new Date());
    //     // 다음 tick까지 남은 밀리초 계산 (정확한 1초 동기화)
    //     const delay = 1000 - (new Date().getMilliseconds());
    //     timer = setTimeout(tick, delay);
    //     };

    //     let timer = setTimeout(tick, 0); // 즉시 시작
    //     return () => clearTimeout(timer); // 언마운트 시 정리
    // }, []);