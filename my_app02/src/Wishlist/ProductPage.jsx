import { useContext } from "react";
import { Link } from 'react-router-dom';
import { WishContext } from "./context/WishContext";

export default function ProductPage(){
    const { dataCopy, addToWishlist, removeFromWishlish } = useContext(WishContext);
    let total = dataCopy.filter(item => item.wishlist);
    console.log(total)
    return(
        <div style={{padding:'20px'}}>
        <div>
            <h1>❤️ 찜하기 예제</h1>
            <Link to="/wishlist"><button> 찜목록 보기</button></Link>
        </div>
        <div style={{padding:'20px'}}>
            <h2>🛍️상품 목록</h2>
            <ul>
                {dataCopy.map((item)=>(
                    <li key={item.id} style={{marginBottom:'10px'}}>
                        <b>{item.name} - {item.price.toLocaleString()}원</b> {item.wishlist? (<button onClick={()=>removeFromWishlish(item.id)}>❤️ 찜해제</button>):(<button onClick={()=>addToWishlist(item.id)}>🤍 찜하기</button>)}
                    </li>
                ))}
            </ul>
        </div>
        <br/>
        <h2> 현재 찜한 상품 수 : {total.length}개</h2>
        </div>

    )
}