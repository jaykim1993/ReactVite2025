import React, { useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
  const [likes, setLikes] = useState([0,0,0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Post Output={()=>{setPost(num+1)}}/>
      <p>11월 1일 발생</p>
    </div>
  );
}

function Post(props) {
  return(
    <div>
      <h2><Post Output={()=>{setPost(num+1)}}/></h2>
      <p>11월 1일 발생</p>
    </div>
  )
}

// 부모의 인자를 자식에게 전달하였다.
