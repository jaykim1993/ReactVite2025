import React, { useState, useEffect } from "react"

export default function Ex02(){
    useEffect(()=>{
        document.title='Welcome to React!'
    },[])
    return(
        <>
            <h1>Title Changer</h1>
            <h3>브라우저 탭을 확인해보세요!</h3>
            <p>제목이 "Welcome to React!"로 변경되었습니다.</p>
        </>
    )
}