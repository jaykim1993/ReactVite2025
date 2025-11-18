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
      setFiltered(result);
    })
    }, []);
    console.log('데이터 배열: ', data) // 오브젝트배열 콘솔 찍는 법
    console.log(`데이터 배열: ${data}`) // 백틱쓰면 [object...]으로 찍힘
  

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
      const result = [...data];
      const sorted = result.sort((a, b) => b.rating.rate - a.rating.rate);
      setFiltered(sorted);
    }



  return (
    <>
      <div className="container">
        <div className="head">
          <h1>RANDOM SHOPPING WHATEVER</h1>
          <button onClick={viewAllBtn}>VIEW ALL</button>
          <button onClick={cateBtn}>CATEGORY</button>
          <button onClick={rateBtn}>HIGH RATEs</button>
          {isOpen && 
          (<div className='dropdown'>
            <button onClick={menBtn}>MEN's CLOTHING</button>
            <button onClick={womenBtn}>WOMEN's CLOTHING</button>
            <button onClick={accBtn}>JEWELERY</button>
            <button onClick={elecBtn}>ELECTRONICs</button>
            </div>)}
        </div>
        <div className="wrap">
          {filtered.map((data)=>(
            <div key={data.id} className="eachItem">
              <ul>
              <li><div><img src={data.image} style={{width:'200px', height:'280px'}}/></div></li>
              <li><h2>{data.title}</h2></li>
              <li><h2>${data.price.toLocaleString()}</h2></li>
              <li><h3>rate: {data.rating.rate} view: {data.rating.count}</h3></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}








