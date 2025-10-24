import React, { useState } from "react"
import  MovieInputTools from "./MovieInputTools"
import  MovieList from "../movie/MovieList"

import '../movie/movie.css'


export default function MovieApp() {
  const [reviews, setReviews] = useState([]);

  return (
      <>
        
        <h1>📽️ 나의 영화 리뷰</h1>
        < MovieInputTools 
          reviews={reviews}
          setReviews = {setReviews}
        />
        < MovieList 
          reviews={reviews}
          setReviews = {setReviews}
        />
      </>
  );
}

