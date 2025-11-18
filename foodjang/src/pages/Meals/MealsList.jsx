import { useState, useEffect, useContext } from "react";
import { PersonalContext } from "../../context/PersonalContext";
import { LoginContext } from "../../context/LoginContext"
import { Link } from 'react-router-dom';
import "./MealsList.style.css";
import star from "../star.png";

export default function MealsList() {
    const { dataCopy, increaseLike, addToWishlist, removeFromWishlish } = useContext(PersonalContext);
    const { userID } = useContext(LoginContext);

    // 필터 상태
    const [currentFilter, setCurrentFilter] = useState("All");
    // 필터된 데이터
    const [filtered, setFiltered] = useState([]);


    // 총 좋아요 수, 총 즐겨찾기 수
    const likeTotal = dataCopy.reduce((acc, item) => acc + item.newlike, 0);
    const wishTotalNum = dataCopy.reduce((acc, item) => acc + (item.wishlist ? 1 : 0), 0);

    const cuisineArray = [
        'Italian', 'Asian', 'American', 'Mexican', 'Mediterranean', 'Pakistani',
        'Japanese', 'Moroccan', 'Korean', 'Greek', 'Thai', 'Indian', 'Turkish',
        'Smoothie', 'Russian', 'Lebanese', 'Brazilian'
    ];

    // 필터 함수
    const handleFilter = (theme) => {
        setCurrentFilter(theme);

        if (theme === 'All') {
            setFiltered([...dataCopy]);
            return;
        }

        if (theme === '높은 평점') {
            setFiltered([...dataCopy].sort((a, b) => b.rating - a.rating));
            return;
        }

        if (theme === '칼로리순') {
            setFiltered([...dataCopy].sort((a, b) => b.caloriesPerServing - a.caloriesPerServing));
            return;
        }

        if (theme === '리뷰 수') {
            setFiltered([...dataCopy].sort((a, b) => b.reviewCount - a.reviewCount));
            return;
        }

        if (theme === '좋아요 목록') {
            const liked = dataCopy.filter(item => item.newlike > 0);
            if (liked.length === 0) {
                alert("좋아요 항목이 없습니다.");
                return;
            }
            setFiltered(liked);
            return;
        }

        if (theme === '찜하기 목록') {
            const inWish = dataCopy.filter(item => item.wishlist);
            if (inWish.length === 0) {
                setFiltered([]); 

                    alert("찜한 항목이 없습니다.");
                    setCurrentFilter("All");
                    setFiltered([...dataCopy]);

                return;
            }
        setFiltered(inWish);
        return;
        }

        setFiltered(dataCopy.filter(item => item.cuisine === theme));
    };
    // console.log('현재 테마 - ', currentFilter)
    // dataCopy 변경 시 현재 필터 유지하고 다시 필터링
    useEffect(() => {
        handleFilter(currentFilter);
    }, [dataCopy]);

    // 최초 렌더링 시 전체 출력
    useEffect(() => {
        setFiltered(dataCopy);
    }, []);

    // 카테고리 탭 숨기기/보이기
    const [isOpenTab, setIsOpenTab] = useState(true);
    const tabHandler = () => setIsOpenTab(!isOpenTab);

    return (
        <>
            <div className="section-container">
                {isOpenTab ? (
                    <div className="section-top">
                        <ul>
                            <li>
                                <h2>전체 랭킹</h2>
                                <div className="buttonTab">
                                    <button onClick={() => handleFilter("All")}>All</button>
                                    <button onClick={() => handleFilter("높은 평점")}>높은 평점</button>
                                    <button onClick={() => handleFilter("리뷰 수")}>좋아요 순</button>
                                    <button onClick={() => handleFilter("칼로리순")}>칼로리순</button>
                                </div>
                            </li>

                            <li>
                                <h2>테마별 음식</h2>
                                <div className="buttonTab-Cuisine">
                                    {cuisineArray.map((theme, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => handleFilter(theme)}
                                            style={{ padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
                                        >
                                            {theme}
                                        </button>
                                    ))}
                                </div>
                            </li>

                            <li>
                                <h2>개인 테마</h2>
                                <div className="buttonTab">
                                    <button onClick={() => handleFilter("좋아요 목록")}>
                                        My Liked: {likeTotal}
                                    </button>
                                    <button onClick={() => handleFilter("찜하기 목록")}>
                                        My Wish: {wishTotalNum}
                                    </button>
                                </div>
                            </li>
                        </ul>

                        <div className="close-top" onClick={tabHandler}>
                            <p className="hide">↑ 카테고리 숨기기</p>
                        </div>
                    </div>
                ) : (
                    <div className="section-top">
                        <div className="close-top" onClick={tabHandler}>
                            <p className="hide">↓ 카테고리 보이기</p>
                        </div>
                    </div>
                )}

                <div className="section-main">
                    {filtered.map((item) => (
                        <div key={item.id} className="eachItem">
                            <ul>
                                <li>
                                    <Link to={`/detail/${item.id}`}>
                                        <div className="imgname">
                                            <img className="itemimg" src={item.image} />
                                            <b className="itemname">{item.name}</b>
                                        </div>
                                    </Link>

                                    <p className="itemcuisine">
                                        Cuisine: <b>{item.cuisine}</b>
                                    </p>

                                    <p className="rating">
                                        {item.rating >= 4.8 ? (
                                            <span>
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                            </span>
                                        ) : item.rating >= 4.4 ? (
                                            <span>
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                            </span>
                                        ) : (
                                            <span>
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                                <img className="star" src={star} />
                                            </span>
                                        )}
                                        <br />
                                        <span>Total Like<strong> - {item.reviewCount}</strong></span>
                                    </p>

                                    {/* 좋아요 버튼 */}
                                    <button
                                        className={item.newlike !== 0 ? "btn-active" : "btn"}
                                        onClick={() => increaseLike(item.id)}
                                    >
                                        Like {item.newlike}
                                    </button>

                                    {/* wishlist 버튼 */}
                                    {item.wishlist ? (
                                        <button
                                            className="btn-active"
                                            onClick={() => removeFromWishlish(item.id)}
                                        >
                                            Wishlist
                                        </button>
                                    ) : (
                                        <button
                                            className="btn"
                                            onClick={() => {userID? addToWishlist(item.id):alert("로그인이 필요합니다.")}}
                                        >
                                            Wishlist
                                        </button>
                                    )}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
