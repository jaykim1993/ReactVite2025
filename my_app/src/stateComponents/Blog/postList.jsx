// 자식 리스트 UI

//import 내역 : CSS
import './Blog.css';

export default function PostList(props){
    return(
        <>
            <div>
                {props.posts.map((posts, index) => (
                    <div className='wrap' key={index} >
                    <h2 className='title' 
                        onClick={()=>{props.setModalOpen(true); props.setSelectedIndex(index)}}>
                        {posts}
                    </h2>
                    <button type="button" 
                    // 버블링: 자식을 선택해도 부모요소인 <h4> 태그가 실행됨
                    // 버블링 해결하는 해소드: (e)=>{e.stopPropagation();
                        onClick={(e)=>{e.stopPropagation(); props.LikeCounter(index)}}>
                        👍 {props.likes[index]}
                    </button>
                    <p>날짜: 11월 1일</p>
                    <button type="button" onClick={()=>props.DeletePost(index)}>삭제</button>
                </div>
                ))}
            </div>
        </>
    )
}