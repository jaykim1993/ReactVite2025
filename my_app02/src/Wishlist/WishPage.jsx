import { useContext } from "react";
import { Link } from 'react-router-dom';
import { WishContext } from "../Wishlist/context/WishContext";

export default function WishPage(){
    const { dataCopy, removeFromWishlish } = useContext(WishContext);
    let total = dataCopy.filter(item => item.wishlist);
    return(
        <div style={{padding:'20px'}}>
            <div>
                <h1>❤️ 찜하기 예제</h1>
                <Link to="/"><button>상품 목록 보기</button></Link>
            </div>
            {total.length === 0? (<h2>찜한 상품이 없습니다.</h2>):
            (
                <div style={{padding:'20px'}}>
                <h2>❤️ 찜한 상품 목록</h2>
                <ul>
                    {total.map((item)=>(
                        <li key={item.id} style={{marginBottom:'10px'}}>
                            <b>{item.name} - {item.price.toLocaleString()}원</b> <button onClick={()=>removeFromWishlish(item.id)}>삭제하기</button>
                        </li>
                    ))}
                </ul>
            </div>
            )}
            <h2> 현재 찜한 상품 수 : {total.length}개</h2>
        </div>

    )
}