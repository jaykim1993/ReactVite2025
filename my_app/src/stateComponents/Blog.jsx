import React, { useState } from "react";

export default function Blog() {


  const [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
  const [inputValue, setInputValue] = useState('');
  const [likes, setLikes] = useState([0,0,0]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [selected, setSelected] = useState(0);

 

  // 인풋값 배열에 넣기
  const AddInput =(e) => {
    setInputValue(e.target.value)
  }


  // 엔터키 감지
  const EnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 엔터로 인한 폼 제출 방지
      AddPost();
    }
  };

  // 포스트 추가(기본 + 인풋값 업데이트) / 얉은 복사 
  const AddPost =()=>{
    // 인풋값 없이 제출하면 경고창 출력
    if(inputValue.trim() === ''){
      return alert('자료를 입력하세요');
    }
    // 얉은 복사 선언
    let shallowPosts = [...posts]; 
    let shallowLikes = [...likes];
    shallowPosts.unshift(inputValue);
    shallowLikes.unshift(0);
    setPosts(shallowPosts);
    setLikes(shallowLikes);
    setInputValue(''); // inputValue 빈값 업데이트 ('')
  };
 

  // 삭제 시 가장 최신 포스트 삭제 / 얉은 복사 
  const DeletePost =(index)=> {
    // 얉은 복사 선언
    let shallowPosts = [...posts]; 
    let shallowLikes = [...likes];
    // 포스트 배열 인덱스 0번값 삭제
    // 라이크 배열 인덱스 0번값 삭제
    shallowPosts.splice(index, 1);
    shallowLikes.splice(index, 1);
    setPosts(shallowPosts);
    setLikes(shallowLikes);
  }


  // 좋아요 수 카운트 / 얉은 복사 
  const LikeCounter = (index) => {
    // 얉은 복사 선언
    let shallowLikes = [...likes];
    shallowLikes[index] ++;
    setLikes(shallowLikes);
  };
  
  console.log('포스트 제목 배열: '+posts);
  console.log('포스트별 좋아요 수 배열 : '+likes);

  return (
      // 배열값 출력
      <>
        {posts.map((posts, index) => (
          <div key={index} 
          style={{width:'500px', 
          height:'300px', 
          border:'1px solid black', 
          lineHeight:'70px',
          borderRadius:'10px',
          margin:'20px'}}>
            <button type="button" onClick={()=>LikeCounter(index)} style={{fontSize:'20px', marginTop:'40px'}}>
              {posts} 👍 {likes[index]}
            </button>
            <p>11월 1일 발생</p>
            <button type="button" onClick={()=>DeletePost(index)}>삭제</button>
          </div>
        ))}
        
        
        <input 
          type="text" 
          placeholder="입력하세요"
          value={inputValue}
          onChange={AddInput}
          onKeyUp={EnterPress} // 엔터키 이벤트 연결
          style={{ outline: "none" }}
        />
        <button type="button" onClick={AddPost}>
          글 발행
        </button>
      </>
  );
}


// 얉은 복사 해서 진짜 배열에 set 적용해서 업데이트 방식이다
// 얉은 복사 후 계속 얉은 복사된 배열만 사용 하는건 아직 무리

// 로직함수 생성 후 return 내 태그에 지정하는 방식

