import { useEffect, useState, createContext } from "react";

export const WishContext = createContext();

export default function WishProvider({ children }) {

    // ✅ 전체 상품 목록 (LocalStorage X)
    const [dataCopy, setDataCopy] = useState([
        { id: 1, name: '노트북', price: 1500000, wishlist: false },
        { id: 2, name: '마우스', price: 30000, wishlist: false },
        { id: 3, name: '키보드', price: 80000, wishlist: false },
    ]);

    // ✅ 1. 초기 렌더링 시 localStorage에서 wishlist true인 id들 로드
    useEffect(() => {
        const saved = localStorage.getItem("wishlist");

        if (saved) {
            const ids = JSON.parse(saved); // 예: [1, 3]
            setDataCopy(prev =>
                prev.map(item =>
                    ids.includes(item.id)
                        ? { ...item, wishlist: true }
                        : item
                )
            );
        }
    }, []);

    // ✅ 2. dataCopy가 바뀌면 wishlist(true만) localStorage에 저장
    useEffect(() => {
        const wishlistIds = dataCopy
            .filter(item => item.wishlist === true)
            .map(item => item.id);
        console.log(wishlistIds)
        if (wishlistIds.length === 0) {
            // ✅ wishlist 비었으면 localStorage key 삭제
            localStorage.removeItem("wishlist");
        } else {
            // ✅ wishlist 있으면 저장
            localStorage.setItem("wishlist", JSON.stringify(wishlistIds));
        }
    }, [dataCopy]);

    // ✅ wishlist 넣기
    const addToWishlist = (id) => {
        setDataCopy(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, wishlist: true }
                    : item
            )
        );
    };

    // ✅ wishlist 끄기
    const removeFromWishlish = (id) => {
        setDataCopy(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, wishlist: false }
                    : item
            )
        );
    };

    return (
        <WishContext.Provider
            value={{ dataCopy, addToWishlist, removeFromWishlish }}
        >
            {children}
        </WishContext.Provider>
    );
}
