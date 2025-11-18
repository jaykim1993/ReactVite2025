import { useState, useEffect } from "react";

export default function ExJ02() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setContent(data.slice(0, 5)))
      .finally(() => {
        console.log('로딩 완료');
      });
  }, []);

  const handleClick = (body) => {
    alert(body);
  };

  return (
    <>
      <h2>게시글 5개</h2>
      <ul>
        {content.map(content => (
          <li key={content.id} onClick={() => handleClick(content.body)}>
            {content.title}
          </li>
        ))}
      </ul>
    </>
  );
}
