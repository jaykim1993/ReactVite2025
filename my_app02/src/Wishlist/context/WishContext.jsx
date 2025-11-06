import { useEffect, useState } from "react";
import { createContext } from "react";

export const WishContext = createContext();

export default function WishProvider({children}){

    const [dataCopy, setDataCopy] = useState([]);
    useEffect(() => {
        const products = [
            { id: 1, name: '노트북', price: 1500000 },
            { id: 2, name: '마우스', price: 30000 },
            { id: 3, name: '키보드', price: 80000 },
        ];
        const addWishlistOJ = products.map(item => ({
            ...item,
            wishlist: false
        }));
        setDataCopy(addWishlistOJ);
    }, [])

    const addToWishlist =(id)=>{
        setDataCopy(dataCopy.map(item => 
            item.id === id 
            ? { ...item, wishlist: true }
            : item
            ));
    }
    const removeFromWishlish=(id)=>{
        setDataCopy(dataCopy.map(item => 
            item.id === id 
            ? { ...item, wishlist: false }
            : item
            ));  
    }

    return(
        <WishContext.Provider 
            value={{dataCopy, addToWishlist, removeFromWishlish}}>
            <>
                {children}
            </>
        </WishContext.Provider>
    )
}