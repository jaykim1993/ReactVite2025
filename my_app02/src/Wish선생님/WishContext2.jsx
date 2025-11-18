import { useEffect, useState } from "react";
import { createContext } from "react";
// 생성자 함수
export const wishlistContext = createContext();

export default function WishlistProvider({children}){
    const[wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('wishlist');
        return saved? JSON.parse(saved) : [];
    })
    
    // useEffect에서는 return방식은 cleanUp함수 작성방법이기에 if사용해야함


    // // LocalStorage에 저장하기
    //     // 1. LocalStorage에서 불러오기
    //         // useEffect 이용해서 작성
    //         useEffect(()=> {
    //             const saved = localStorage.getItem('wishlist')
    //             if(saved){
    //                 setWishlist(JSON.parse(saved)) // 상태 갱신
    //             }
    //         },[])
        // 2. wishlist가 바뀔때마다 LocalStorage에 저장
            // useEffect 이용
            useEffect(()=>{
                if(wishlist.length === 0) {
                    localStorage.removeItem('wishlist');
                } else {
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                }
            },[wishlist])



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