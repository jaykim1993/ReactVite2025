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

    // JSON에 직접 오브젝트배열 추가하기
    useEffect(() => {
        const updated = data.map(item => 
            ({ ...item, like: 0 }));
        setFiltered(updated);
    }, [data]);

    const increaseLike = (id) => {
        setFiltered(filtered.map(item =>
            item.id === id ? { ...item, like: item.like + 1 } : item )
        );
    };
    console.log(data)
    console.log(filtered)

    // 선생님 방법: JSON에 넣지 않고 데이터 갯수에 맞게 만들어서 계산만 해줌
    // const defaultLikes = {}
    // for(let i=0;i<data.length;i++){
    //     const recip = data[i];
    //     defaultLikes[recip.id]=0 // 각 레시피 id별로 초기값 0으로 셋
    // }
    // const[like, setLike]=useState(defaultLikes)

    // const increaseLike = (id) => {
    //     const likesCopy = {...like}
    //     likesCopy[id] = (likesCopy[id] !== undefined? likesCopy[id]:0) + 1
    //     setLike(likesCopy)
    // }
    // console.log(like)


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
                        <p className="itemcuisine">Cuisine: <b>{item.cuisine}</b></p>
                        <p className="rating">rate- <strong>{item.rating}</strong> view- <strong>{item.reviewCount}</strong></p>
                        <button onClick={() => increaseLike(item.id)}>♡ Like {item.like}</button>
                        {/* <button onClick={() => increaseLike(item.id)}> ❤️ like {like[item.id]}</button> */}
                        </li>
                    </ul>
                    
                </div>
                ))}
            </div>
        </div>
    )
}