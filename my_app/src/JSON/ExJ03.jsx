import { useState, useEffect } from "react";

export default function ExJ03() {
  const[loading, setLoading] = useState(true);
  const[data, setData] = useState([]);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/postss')
     .then((res) => {
      if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
     })
     .then((result) => {
      setData(result.slice(0, 5));
      console.log(data)
     })
     .catch((err) => {
      console.error('X 에러발생:',err);
      setError(err.message);
     })
     .finally(() => {
      console.log('요청완료');
      setLoading(false);
      console.log(loading)
     })
  }, []);console.log(data)

  if(error)return<h1>에러가 발생했습니다! {error}</h1>

  return (
    <>
      <ul>
            {data.map((data)=>(
                <li key={data.id}>{data.title}</li>
            ))}
      </ul>
    </>
  );
}
