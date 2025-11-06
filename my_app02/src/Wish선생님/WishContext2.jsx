import { useState } from "react";
import { createContext } from "react";
// 생성자 함수
export const wishlistContext = createContext();

export default function WishlistProvider({children}){
    const[wishlist, setWishlist] = useState([])

    // 이미 같은 id를 가진 상품이 존재하면 중복 추가 안됨
    // 배열.find() => 
    // 찾는 항복이 존재하면 오브젝트 배열이 나오고 
    // 없으면 undefinded 나옴
    const addToWishlist = (product) => {
        const listFind = wishlist.find((item) => item.id === product.id)
        if(listFind === undefined){
            let listCopy = [...wishlist]
            listCopy.push(product)
            setWishlist(listCopy)
        }
    }

    // id가 다른 항목이 있으면 남기고 그대로 업데이트 한다
    const removeFromWishlish = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id))
    }
    // isInWishlist : 이미 찜된 항목인지 확인을 위해 생성하는 함수
    const isInWishlist = (id) => {
        const findItem = wishlist.find((item) => item.id === id)
        // 찾는 상품이 존재하면 oj, 없으면 undefinded
        if(findItem !== undefined){
            // 존재하면 true 반환
            return true;
        }else{
            // 없으면 false 반환
            return false;
        }
    }
    return(
        <wishlistContext.Provider 
            value={{wishlist, addToWishlist, removeFromWishlish, isInWishlist}}>
                {children}
        </wishlistContext.Provider>
    )
}