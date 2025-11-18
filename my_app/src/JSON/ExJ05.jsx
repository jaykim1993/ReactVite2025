import { useState, useEffect } from "react";
export default function ExJ05() {
  const[data, setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((result) => {
      setData(result);
    })
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
    }, []);
    console.log(loading)
 
  useEffect(() => {
      if (!loading) return;
      const dotAdder = setInterval(() => {setDots((prev) => {
        if (prev.length === 3) return ""; 
        return prev + "."; 
      });}, 500);
      return () => clearInterval(dotAdder);
    }, [dots,loading]);
    console.log(dots)

  return (
    <>
      {loading?
      (<h2>불러오는 중{dots}</h2>)
      :
      (<div>
        <h2>불러오기 완료!</h2>
        <ul>
          {data.map((data)=>(
              <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>)}
    </>
  );
}
