import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./fakestore.css";

export default function Fakestore({data}) {
  const [filtered, setFiltered] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setFiltered(data);
    }
  }, [data]);

  const viewAllBtn = () => setFiltered([...data]);
  const cateBtn = () => setIsOpen(!isOpen);

  const menBtn = () => setFiltered(data.filter(item => item.category === "men's clothing"));
  const womenBtn = () => setFiltered(data.filter(item => item.category === "women's clothing"));
  const accBtn = () => setFiltered(data.filter(item => item.category === "jewelery"));
  const elecBtn = () => setFiltered(data.filter(item => item.category === "electronics"));

  const rateBtn = () => {
    const sorted = [...data].sort((a, b) => b.rating.rate - a.rating.rate);
    setFiltered(sorted);
  };

  return (
    <div className="container">
      <div className="head">
        <h1>RANDOM SHOPPING WHATEVER</h1>
        <button onClick={viewAllBtn}>VIEW ALL</button>
        <button onClick={cateBtn}>CATEGORY</button>
        <button onClick={rateBtn}>HIGH RATEs</button>

        {isOpen && (
          <div className="dropdown">
            <button onClick={menBtn}>MEN's CLOTHING</button>
            <button onClick={womenBtn}>WOMEN's CLOTHING</button>
            <button onClick={accBtn}>JEWELERY</button>
            <button onClick={elecBtn}>ELECTRONICs</button>
          </div>
        )}
      </div>

      <div className="wrap">
        {filtered.map((item) => (
          <div key={item.id} className="eachItem">
            <Link to={`/product/${item.id}`}>
              <ul>
                <li>
                  <img 
                    src={item.image} 
                    style={{ width: "200px", height: "280px", objectFit: "contain" }} 
                  />
                </li>
                <li><h2 className="itemTitle">{item.title}</h2></li>
                <li><p className="price">${item.price}</p></li>
                <li><p className="category">rate: <strong>{item.rating.rate}</strong> view: <strong>{item.rating.count}</strong></p></li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
