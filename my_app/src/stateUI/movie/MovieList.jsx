import React, { useState } from "react";
import '../movie/movie.css'
import  MovieModal from "../movie/MovieModal"

export default function MovieList(props) {

  // 삭제 시 가장 최신 포스트 삭제
      const DeleteReview =(index)=> {
        const shallowReview = [...props.reviews];
        shallowReview.splice(index, 1);
        props.setReviews(shallowReview); 
      }
  
  
  // 좋아요 수 카운트
      const LikeCounter = (index) => {
        const shallowReview = [...props.reviews]; 
        shallowReview[index].likes += 1;  
        props.setReviews(shallowReview);         
      };
      
  // 모달 관련
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);


  return (
      <>
        {props.reviews.map((reviews, index) => (
          <div className="reviewContainer" key={index}>
            <h2 className="listHead" type="button" onClick={() => LikeCounter(index)}>{reviews.title} 👍 {reviews.likes}</h2>
            <span className='modalOn' type='button' onClick={()=>{setModalOpen(true); setSelectedIndex(index)}}> 
              상세보기
            </span>
            <span className='delete' type="button" onClick={() => DeleteReview(index)}>삭제</span>
          </div>
        ))}
        {modalOpen && 
          <MovieModal
              reviews = {props.reviews}
              setReviews = {props.setReviews}
              selectedIndex = {selectedIndex}
              modalOpen = {modalOpen}
              onClose={()=>setModalOpen(false)}
              LikeCounter = {LikeCounter}
        />}
      </>
  );
}

