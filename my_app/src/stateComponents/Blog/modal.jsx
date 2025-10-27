// 자식 모달 UI

//import 내역 : CSS
import './Blog.css';

export default function Modal(props){
  // 업데이트 함수
  const Update =()=> {
    // posts 얉은 복사
    const shallowPosts = [...props.posts];

    // 특정 인덱스에 해당되는 포스트 선택 시 프롬프트 창 뜨고 입력 후, 해당 포스트에 업데이트
    // 1. prompt("새 제목을 입력하세요")
    shallowPosts[props.selectedIndex] = 
    prompt('새 제목을 입력하세요', shallowPosts[props.selectedIndex]) 
    || shallowPosts[props.selectedIndex];
    // 2. 수정한 글 제목 update
    props.setPosts(shallowPosts)
  }



  return(
    <div className="overray">
      <div className="modal" style={{background:props.color}}>
          <h4>{props.posts[props.selectedIndex]}</h4>
          <p>날짜: 11월 1일</p>
          <p>상세내용: 여기에 내용을 넣어보세요.</p>
          <button onClick={Update}>글 수정</button>
          <button onClick={props.onClose}>닫기</button>
      </div>
    </div>
  )
}