import { useContext } from "react";
import { Link } from 'react-router-dom';
import { wishlistContext } from "./WishContext2";

export default function WishPage(){
    const { wishlist, removeFromWishlish } = useContext(wishlistContext);

    return(
        <>
            {wishlist.length == 0? 
            <p>찜한 상품이 없습니다.</p>:
            (
                <div>
                    <h2>❤️ 찜한 상품 목록</h2>
                    <ul>
                        {wishlist.map((item)=>(
                            <li key={item.id} style={{marginBottom:'10px'}}>
                                <b>{item.name} - {item.price.toLocaleString()}원</b> 
                                <button type="button" onClick={()=>removeFromWishlish(item.id)}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
                
            <h2> 현재 찜한 상품 수 : {wishlist.length}개</h2>
        </>

    )
}