import React, { useState } from "react";
export default function MovieReview() {

  const [inputTitle, setInputTitle] = useState('');
  const [inputComments, setInputComment] = useState('');


  // 얉은 복사 선언
  let shallowReview = [...reviews] ;

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

  // 포스트 추가(기본 + 인풋값 업데이트)
  const AddReview =()=>{
    if(inputTitle === '' || inputComments === ''){
      return alert('제목과 한줄평 모두 입력하세요!')
    }
    let newReview = {id:reviews.length, title: inputTitle, comment: inputComments, likes: 0}
    setReviews([newReview,...shallowReview])
    setInputTitle('');
    setInputComment('');
  };
 
  

  // 삭제 시 가장 최신 포스트 삭제
  const DeleteReview =(index)=> {
    shallowReview.splice(index, 1);
    setReviews(shallowReview); 
  }


  // 좋아요 수 카운트

const LikeCounter = (index) => {
  const shallowReview = [...reviews]; 
  shallowReview[index].likes += 1;  
  setReviews(shallowReview);         
};





  return (
      // 배열값 출력
      <>
        <h1>📽️ 나의 영화 리뷰</h1>

        <input 
          type="text" 
          placeholder="영화 제목"
          value={inputTitle}
          onKeyUp={EnterPress} 
          onChange={AddTitle}
          style={{ outline: "none", margin:'0 10px', padding:'14px', borderRadius:'5px'}}
        />
        <input 
          type="text" 
          placeholder="한줄평"
          value={inputComments}
          onKeyUp={EnterPress} 
          onChange={AddComments}
          style={{ outline: "none",margin:'0 10px', padding:'14px', borderRadius:'5px' }}
        />
        <button type="button" onClick={AddReview} style={{width:'100px', border:'1px solid black'}}>
          등록
        </button>


        {reviews.map((reviews, index) => (
          <div key={reviews.id} 
          style={{width:'500px', 
          height:'300px', 
          border:'1px solid black', 
          lineHeight:'70px',
          borderRadius:'10px',
          margin:'20px'}}>
            <h2>{reviews.title}</h2>
            <div>{reviews.comment}</div>
            <button type="button" onClick={() => LikeCounter(index)} style={{fontSize:'20px', marginTop:'40px'}}>
               👍 {reviews.likes}
            </button>
            <button type="button" onClick={() => DeleteReview(index)}>삭제</button>
          </div>
        ))}

      </>
  );
}

