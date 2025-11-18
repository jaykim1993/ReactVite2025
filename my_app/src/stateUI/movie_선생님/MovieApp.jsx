import React, { useState } from "react"
import  MovieList from "../movie_선생님/MovieList"
import  MovieModal from "../movie_선생님/MovieModal"

import '../movie/movie.css'


export default function NewMovie() {
  const [movie, setMovie] = useState([]);
  const [selectMovie, setSelectMovie] = useState(null);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  // 영화제목과 리뷰가 같이 저장되는 오브젝트 배열 movie 에
  // 입력된 데이터가 삽입되는 함수 생성
  const addMovie =()=>{
    // title이 비어있으면 return 종료
    if(title === '') return alert('제목을 입력해주세요! (필수)')
    // movie 얉은 복사
    const movieCopy = [...movie];
    movieCopy.push({id:movie.length, title:title, review:review});
    setMovie(movieCopy);
    // 업데이트 후 인풋박스 초기화
    setTitle('');
    setReview('');
  }


  return (
      <>
        <h2>영화 리뷰 관리 앱 📽️</h2>
        <input type="text" placeholder="영화 제목" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <input type="text" placeholder="리뷰" value={review} onChange={(e)=> setReview(e.target.value)}/>
        <button type="button" onClick={addMovie}>등록</button>
        <MovieList 
            movie={movie}
            onSelect={setSelectMovie}
        />
        {
           selectMovie !=null? <MovieModal 
            selectMovie={selectMovie}
            onClose={()=>setSelectMovie(null)}
        /> : null
        }
        
      </>
  );
}

