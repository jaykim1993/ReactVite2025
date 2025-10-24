import '../movie/movie.css'

export default function MovieModal(props) {
   const Update =()=> {
    const shallowReviews = [...props.reviews];

    shallowReviews[props.selectedIndex].comment = 
    prompt('한줄평을 입력하세요', shallowReviews[props.selectedIndex].comment) 
    || shallowReviews[props.selectedIndex].comment;
    // 2. 수정한 글 제목 update
    props.setReviews(shallowReviews)
  }

  return (

      <div className='overray'>
        <div className='modal'>
          <h2 className="likeBtn" type="button" onClick={() => props.LikeCounter(props.selectedIndex)}>{props.reviews[props.selectedIndex].title} 👍 {props.reviews[props.selectedIndex].likes}</h2>
          <b onClick={Update}>comment - "<p onClick={Update}> {props.reviews[props.selectedIndex].comment} </p>"</b><br/>
          <button className="modalTool" type="button" onClick={Update}>한줄평 입력하기</button>
          <button className="closeMo" type="button" onClick={props.onClose}>🗙</button>
        </div>
      </div>
  );
}
