export default function Moviemodal(props){

   
    return(
        <div style={{position:'fixed', top:0, left:0, width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.3)', display:'flex',justifyContent:'center'}}>
            <div style={{backgroundColor:'whitesmoke', borderRadius:'5px', padding:'20px',width:'300px'}}>
                <h4>{props.selectMovie.title}</h4>
                <p>{props.selectMovie.review === ''?'아직 작성된 리뷰가 없습니다.'
                :props.selectMovie.review}</p>
                <button type="button" onClick={props.onClose}>닫기</button>
            </div>
        </div>
    )
}
