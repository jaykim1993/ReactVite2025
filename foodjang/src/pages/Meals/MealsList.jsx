import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./MealsList.style.css";
import star from "../star.png"
export default function MealsList({data}){
    const [dataCopy, setDataCopy] = useState([]);
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        const updated = data.map(item => ({
            ...item,
            like: 0,
            mark: false
            }));
        setDataCopy(updated);
        setFiltered(updated);
    }, [data]);

    const increaseLike = (id) => {
        setDataCopy(dataCopy.map(item =>
            item.id === id ? { ...item, like: item.like + 1 } : item
        ));
        setFiltered(filtered.map(item =>
            item.id === id ? { ...item, like: item.like + 1 } : item
        ));
    };
    const toggleMark = (id) => {
        const updated = dataCopy.map(item =>
            item.id === id ? { ...item, mark: !item.mark } : item
        );

        setDataCopy(updated);
        setFiltered(filtered.map(item =>
            item.id === id ? { ...item, mark: !item.mark } : item
        ));
    };
    
    const cuisineArray = [
        'Italian', 'Asian', 'American', 'Mexican', 'Mediterranean', 'Pakistani',
        'Japanese', 'Moroccan', 'Korean', 'Greek', 'Thai', 'Indian', 'Turkish',
        'Smoothie', 'Russian', 'Lebanese', 'Brazilian'
    ];

    const handleFilter = (theme) => {
        if (theme === 'NEW') {
            setFiltered([...dataCopy]);
        } else if (theme === '높은 평점') {
            setFiltered([...dataCopy].sort((a, b) => b.rating - a.rating));
        } else if (theme === '칼로리순') {
            setFiltered([...dataCopy].sort((a, b) => b.caloriesPerServing - a.caloriesPerServing));
        } else if (theme === '리뷰 수') {
            setFiltered([...dataCopy].sort((a, b) => b.reviewCount - a.reviewCount));
        } else if (theme === '좋아요') {
            const liked = dataCopy.filter(item => item.like > 0);
            if (liked.length === 0) {
                alert("좋아요 항목이 없습니다.");
                return;  // filtered 유지
            }
            setFiltered(liked);
            return;
        } else if (theme === '즐겨찾기') {
            const marked = dataCopy.filter(item => item.mark === true);
            if (marked.length === 0) {
                alert("즐겨찾기 항목이 없습니다.");
                return;  
            }
            setFiltered(marked);
            return;
        } else {
            setFiltered(dataCopy.filter(item => item.cuisine === theme));
        }
        
    };

    // 탭 숨기기
    const [isOpenTab, setIsOpenTab] = useState(true);
    const tabHandler = () => setIsOpenTab(!isOpenTab);

    console.log(filtered)

    return(
        <>
            <div className="section-container">
                {isOpenTab ? (<div className="section-top">
                        <ul>
                            <li>
                                <h2>전체 랭킹</h2>
                                <div className="buttonTab">
                                    <button onClick={() => handleFilter("NEW")}>NEW</button>
                                    <button onClick={() => handleFilter("높은 평점")}>높은 평점</button>
                                    <button onClick={() => handleFilter("리뷰 수")}>리뷰 수</button>
                                    <button onClick={() => handleFilter("칼로리순")}>칼로리순</button>
                                </div>
                            </li>
                            <li>
                                <h2>테마별 음식</h2>
                                <div className="buttonTab-Cuisine">
                                    {[...cuisineArray].map((theme, index) => (
                                        <button key={index} onClick={() => handleFilter(theme)} style={{ padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
                                        {theme}
                                        </button>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <h2>개인 테마</h2>
                                <div className="buttonTab">
                                    <button onClick={() => handleFilter("즐겨찾기")}>즐겨찾기</button>
                                    <button onClick={() => handleFilter("좋아요")}>좋아요</button>
                                </div>
                            </li>
                        </ul>
                        <div className="close-top" onClick={tabHandler}>↑ 카테고리 숨기기</div>
                    </div>
                    )
                    : 
                    (<div className="section-top">
                        <div className="close-top" onClick={tabHandler}>↓ 카테고리 보이기</div>
                        </div>
                    )
                }
                <div className="section-main">
                    {filtered.map((item) => (
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
                                <p className="rating"> 
                                    {item.rating >= 4.8 ? 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>:
                                        item.rating >= 4.4 ? 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>: 
                                        <span><img className="star" src={star}/><img className="star" src={star}/><img className="star" src={star}/></span>
                                    } 
                                    <p>View- <strong>{item.reviewCount}</strong></p>  
                                </p>
                                <button 
                                    className={item.like != 0 ? "btn-active" : "btn"} 
                                    onClick={() => increaseLike(item.id)}>
                                        🤍 Like {item.like}
                                </button>
                                <button 
                                    className={item.mark ? "btn-active" : "btn"} 
                                    onClick={() => toggleMark(item.id)}>
                                        {item.mark ? "즐겨찾기" : "즐겨찾기"}
                                </button>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}