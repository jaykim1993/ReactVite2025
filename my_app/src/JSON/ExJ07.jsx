import { useState, useEffect } from "react";
import "./Exj07.css"

export default function ExJ07() {
  const[data, setData] = useState([]);
  const[isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((result) => {
      setData(result);
    })
    }, []);
    console.log(data)
    
    const viewAllBtn =()=>{
      setFiltered([...data])
    }
    const cateBtn =()=>{
      setIsOpen(!isOpen)
    }
    const menBtn =()=>{
      const result = data.filter((item) => item.category === "men's clothing");
      setFiltered(result);
    }
    const womenBtn =()=>{
      const result = data.filter((item) => item.category === "women's clothing");
      setFiltered(result);
    }
    const accBtn =()=>{
      const result = data.filter((item) => item.category === "jewelery");
      setFiltered(result);
    }
    const elecBtn =()=>{
      const result = data.filter((item) => item.category === "electronics");
      setFiltered(result);
    }
    const rateBtn =()=>{
      const result = [...data].sort((a, b) => b.rating.rate - a.rating.rate);
      setFiltered(result);
    }



  return (
    <>
      <div className="container">
        <div className="head">
          <h1>RANDOM SHOPPING WHATEVER</h1>
          <button onClick={viewAllBtn}>전체보기</button>
          <button onClick={cateBtn}>카테고리</button>
          <button onClick={rateBtn}>평점순</button>
          {isOpen && 
          (<div className='dropdown'>
            <button onClick={menBtn}>남성의류</button>
            <button onClick={womenBtn}>여성의류</button>
            <button onClick={accBtn}>쥬얼리&잡화</button>
            <button onClick={elecBtn}>가전제품</button>
            </div>)}
        </div>
        <div className="wrap">
          {filtered.map((data)=>(
            <div key={data.id} className="eachItem">
              <ul>
              <li><div><img src={data.image} style={{width:'200px', height:'280px'}}/></div></li>
              <li><h2>{data.title}</h2></li>
              <li><h3>${data.price.toLocaleString()}</h3></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}








