import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";

export default function RecipeList({data}) {
    const [filtered, setFiltered] = useState(data);
    useEffect(()=>{
        if (data.length > 0){
            setFiltered(data);
        }
    }, [data]);
    console.log(filtered)
    // 버튼 관련
    const cuisineArray = [
        'Italian', 'Asian', 'American', 'Mexican', 'Mediterranean', 'Pakistani',
        'Japanese', 'Moroccan', 'Korean', 'Greek', 'Thai', 'Indian', 'Turkish',
        'Smoothie', 'Russian', 'Lebanese', 'Brazilian'
    ];
    const handleFilter = (cuisine) => {
       if (cuisine === 'ALL') {
            setFiltered(data);
        } else if(cuisine === 'By-Rating'){
            const sorted = [...data].sort((a, b) => b.rating - a.rating);
            setFiltered(sorted);
        }else {
            setFiltered(data.filter(data => data.cuisine === cuisine));
        }
    };
    
    // useEffect(() => {
    //     const updated = filtered.map(item => ({
    //         ...filtered,like: 0  // 새로운 key/value 추가
    //     }));
    //     setFiltered(updated);
    // }, []);
    // const likeBtn =(like)=>{{
    //     setLike()
    // }}

    return(
        <div className="container">
            <div className="head">
                <h1>RECIPE LIST</h1>
                <div className="buttonTab">
                    {['ALL', 'By-Rating',  ...cuisineArray].map((cuisine, index) => (
                        <button key={index} onClick={() => handleFilter(cuisine)} style={{ padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
                        {cuisine}
                        </button>
                    ))}
                </div>
            </div>

            <div className="wrap">
                {filtered.map((item) => (
                <div key={item.id} className="eachItem">
                    
                    <ul>
                        <li>
                        <Link to={`/product/${item.id}`}>
                        <div className="imgname">
                            <img src={item.image} />
                            <h2 className="itemname">{item.name}</h2>
                        </div>
                        </Link>
                        <p className="itemcuisine">{item.cuisine}</p>
                        <p className="rating">rate: <strong>{item.rating}</strong> view: <strong>{item.reviewCount}</strong></p>
                        <button>♡ like</button>
                        </li>
                    </ul>
                    
                </div>
                ))}
            </div>
        </div>
    )
}