import React, { useState } from "react";
import '../movie/movie.css'

export default function MovieInputTools(props) {


  const [inputTitle, setInputTitle] = useState('');
  const [inputComments, setInputComment] = useState('');

  // 얉은 복사 선언
      let shallowReview = [...props.reviews] ;
  
  // 포스트 추가(기본 + 인풋값 업데이트)
      const AddReview =()=>{
        if(inputTitle === ''){
          return alert('제목을 입력해주세요! (필수)')
        }
        let newReview = {id:props.reviews.length, title: inputTitle, comment: inputComments, likes: 0}
        props.setReviews([newReview,...shallowReview])
        setInputTitle('');
        setInputComment('');
      };
      console.log(props.reviews);
  // 인풋값 받기
      const AddTitle =(e) => {
        setInputTitle(e.target.value)
      }
      const AddComments =(e) => {
        setInputComment(e.target.value)
      }
  // 엔터키 (추가기능)
      const EnterPress = (e) => {
        if (e.key === "Enter") {
          AddReview();
        }
      };

  return (
      <>
        <input 
          type="text" 
          placeholder="영화 제목 (입력 필수)"
          value={inputTitle}
          onKeyUp={EnterPress} 
          onChange={AddTitle}
        />
        <input 
          type="text" 
          placeholder="한줄평 (입력 선택)"
          value={inputComments}
          onKeyUp={EnterPress} 
          onChange={AddComments}
        />
        <button 
          className="addReviewBtn" 
          type="button" 
          onClick={AddReview}>
          등록
        </button>
      </>
  );
}

