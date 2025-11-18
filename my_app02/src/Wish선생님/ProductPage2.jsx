import { useContext } from "react";
import { Link } from 'react-router-dom';
import { wishlistContext } from "./WishContext2";

const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '마우스', price: 30000 },
    { id: 3, name: '키보드', price: 80000 },
];

export default function ProductPage(){
    const { wishlist, addToWishlist, removeFromWishlish, isInWishlist } = useContext(wishlistContext);

    return(
        <div style={{padding:'20px'}}>
        <div>
            <h2>🛍️상품 목록</h2>
            <ul>
                {products.map((item)=>(
                    <li key={item.id} style={{marginBottom:'10px'}}>
                        <b>{item.name} - {item.price.toLocaleString()}원</b> 
                        <button onClick={()=>
                            isInWishlist(item.id)? removeFromWishlish(item.id) : addToWishlist(item)}>
                                {isInWishlist(item.id)?'❤️ 찜해제':'🤍 찜하기'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <br/>
        <h2> 현재 찜한 상품 수 : {wishlist.length}개</h2>
        </div>

    )
}