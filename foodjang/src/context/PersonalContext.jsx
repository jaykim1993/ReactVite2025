import { createContext, useState, useEffect } from "react";

export const PersonalContext = createContext();

export default function PersonalProvider({ data, children }) {
    const [dataCopy, setDataCopy] = useState([]);

    useEffect(() => {
        const updated = data.map(item => ({
            ...item,
            newlike: 0,
            wishlist: false
        }));
        setDataCopy(updated);
    }, [data]);

    // localStorage 관련 !!
        useEffect(() => {
            const saved = localStorage.getItem("wishlist");
            if (saved) {
                const storageItem = JSON.parse(saved); 
                setDataCopy(prev =>
                    prev.map(item =>
                        storageItem.includes(item)
                            ? { ...item, wishlist: true }
                            : item
                    )
                );
            }
        }, []);
        useEffect(() => {
            const wishlistIds = dataCopy
                .filter(item => item.wishlist === true)
                .map(item => item);
            console.log(wishlistIds)
            if (wishlistIds.length === 0) {
                localStorage.removeItem("wishlist");
            } else {
                localStorage.setItem("wishlist", JSON.stringify(wishlistIds));
            }
        }, [dataCopy]);

    // 좋아요 증가 함수 => 좋아요를 reviewCount의 값으로 활용하겠다.
        const increaseLike = (id) => {
            setDataCopy(prev =>
                prev.map(item =>
                    item.id === id
                        ? { ...item, reviewCount: item.reviewCount + 1 }
                        : item
                )
            );
            setDataCopy(prev =>
                prev.map(item =>
                    item.id === id
                        ? { ...item, newlike: item.newlike + 1 }
                        : item
                )
            );
        };

    // 찜하기 토글
        const addToWishlist = (id) => {
            setDataCopy(prev =>
                prev.map(item =>
                    item.id === id
                        ? { ...item, wishlist: true }
                        : item
                )
            );
        };
        const removeFromWishlish=(id)=>{
            setDataCopy(dataCopy.map(item => 
                item.id === id 
                ? { ...item, wishlist: false }
                : item
                ));  
        }

    return (
        <PersonalContext.Provider value={{ dataCopy, increaseLike, addToWishlist, removeFromWishlish }}>
            {children}
        </PersonalContext.Provider>
    );
}
