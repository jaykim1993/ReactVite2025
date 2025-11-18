import React, { useState } from "react";



export default function CommnetBoard() {

  const [comments, setComments] = useState([
{ id:0, text: '리액트 재밌어요!', like: 0 },
{ id:1, text: 'useState 너무 신기해요', like: 0 },
]);

  const [inputComment, setInputComment] = useState('');

  // 얉은 복사 선언
  let shallowComments = [...comments] ;
  // 인풋값 받기
  const AddComment =(e) => {
    setInputComment(e.target.value)
  }
  // 엔터키 (추가기능)
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      AddCommentsList();
    }
  };
  // 포스트 추가(기본 + 인풋값 업데이트)
  const AddCommentsList =()=>{
    if(inputComment === ''){
      return alert('코멘트를 입력하세요!')
    }
    let newItem = {id:comments.length, text: inputComment, like: 0};
    setComments([newItem,...shallowComments])
    setInputComment('');

  };
  // 삭제 시 가장 최신 포스트 삭제
  const DeleteComments =(index)=> {
    shallowComments.splice(index, 1);
    setComments(shallowComments); 
  }
  // 좋아요 버튼
  const ThumbsUp= (index) => {
      shallowComments[index].like += 1;
      setComments(shallowComments); 
  };

  return (
      // 배열값 출력
      <>
        <h1 style={{marginBottom:'80px'}}> 🎭 댓글 게시판</h1>

        <input 
          type="text" 
          placeholder="댓글 입력"
          value={inputComment}
          onKeyUp={EnterPress} 
          onChange={AddComment}
          style={{ outline: "none", padding:'18px 50px', borderRadius:'5px', fontSize:'20px' }}
        />
        <button type="button" onClick={AddCommentsList} style={{width:'150px',height:'60px', fontSize:'18px', marginLeft:'90px', border:'1px solid black'}}>
          추가
        </button>

        {comments.map((comments, index) => (
          <div key={comments.id} 
          style={{width:'600px', 
          height:'80px', 
          border:'1px solid black', 
          alignContent:'center',
          justifyContent:'space-around',
          borderRadius:'10px',
          margin:'20px', display:'flex'}}>

            {/* 부모 요소 넘겨주기 작업 + 자식 들어올 위치----------------------------------*/}
            <CommentItem
             comments={comments}
             index={index}
             ThumbsUp={ThumbsUp} />
            {/* 부모 요소 넘겨주기 작업 + 자식 들어올 위치----------------------------------*/}

            <button type="button" onClick={() => DeleteComments(index)} style={{fontSize:'20px'}}>삭제</button>
          </div>
        ))}
      </>
  );
}


//  자식 요소
const CommentItem =(props)=>{
  return(
    <>
      <h3 style={{width:'300px'}}>{props.comments.text}</h3>
      <button type="button" onClick={() => props.ThumbsUp(props.index)} style={{fontSize:'20px'}}>
        👍 {props.comments.like}
      </button>
    </>
  )
}


// props로 부모와 자식 컴포넌트를 분리하는 이유는 
// 데이터 흐름을 명확히 하고, 컴포넌트를 독립적으로 관리·재사용할 수 있게 하여 
// 유지보수성과 확장성을 향상시키기 위함이다.
