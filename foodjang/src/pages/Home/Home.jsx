import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
// import { LoginContext } from "../../context/LoginContext"
import "./Home.style.css";
import star from "../star.png"
import intro from "../intro.png"


export default function Home({ data }) {
    const [dataCopy, setDataCopy] = useState([]);
    const [italianFiltered, setItalianFiltered] = useState([]);
    const [bestFiltered, setBestFiltered] = useState([]);
    // const { userID } = useContext(LoginContext);

    useEffect(() => {
        setDataCopy(data);
    }, [data]);
    

    useEffect(() => {
        if (dataCopy.length === 0) return;
        setBestFiltered(
            dataCopy.filter(item => item.rating >= 4.9).slice(0,5)
        );
        setItalianFiltered(
            dataCopy.filter(item => item.cuisine === "Italian").slice(0,5)
        );
    }, [dataCopy]);
    
    function getStarCount(rating) {
        if (rating >= 4.8) return 5;
        if (rating >= 4.4) return 4;
        return 3;
    }
alert('Members only. You will be redirected to the login page!')
    return(
        <>
            <div className="section-container">
                <img className="intro" src={intro} alt="intro"/>
                <h2>5 Star Dishes</h2>
                <div className="section-main">
                    {bestFiltered.map((item) => (
                        <div key={item.id} className="eachItem">
                            <ul>
                                <li>
                                    <Link to={`/detail/${item.id}`}>
                                        <div className="imgname">
                                            <img className="itemimg" src={item.image} />
                                            <b className="itemname">{item.name}</b>
                                        </div>
                                    </Link>
                                    <p className="itemcuisine">Cuisine: <b>{item.cuisine}</b></p>
                                    <span> View- <strong>{item.reviewCount}</strong></span>
                                    <div className="rating"> 
                                        <span>
                                        {Array(getStarCount(item.rating))
                                            .fill(0)
                                            .map((_, i) => <img key={i} className="star" src={star} />)}
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <h2>Travel to Italy</h2>
                <div className="section-main">
                    {italianFiltered.map((item) => (
                        <div key={item.id} className="eachItem">
                            <ul>
                                <li>
                                <Link to={`/detail/${item.id}`}>
                                    <div className="imgname">
                                        <img className="itemimg" src={item.image} />
                                        <h2 className="itemname">{item.name}</h2>
                                    </div>
                                </Link>
                                <p className="itemcuisine">Cuisine: <b>{item.cuisine}</b></p>
                                <div className="rating"> 
                                    {item.rating >= 4.8 ? 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>:
                                        item.rating >= 4.4 ? 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>: 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>
                                    } 
                                    <p>View- <strong>{item.reviewCount}</strong></p>  
                                </div>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}