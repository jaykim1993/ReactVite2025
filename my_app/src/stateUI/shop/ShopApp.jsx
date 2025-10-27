import React, { useState } from "react"
import  ProductList from "../shop/ProductList"
import  CartModal from "../shop/CartModal"

// ShopApp.jsx
// Products, cart, showCart 관리
// 상태 관리 (데이터 중심)
    // Products(상품목록)
    // Cart(장바구니 목록)
    // showCart(모달 표시 


export default function ShopApp(){
    // 원본 데이터 유지하며 카트 배열을 새로 추가 한다
    const [products] = useState([
            {id: 1, name: '노트북', price:12000000},
            {id: 2, name: '마우스', price:25000},
            {id: 3, name: '키보드', price:50000}]);

    // 카트 빈 배열 추가
    let [cart, setCart] = useState([]);

    // 장바구니 모달 창 출력위한 변수
        // false면 출력 x true면 출력!
    let [showCart, setShowCart] = useState(false); 

    
    // 기존의 장바구니가 담긴 상품이 존재하는지 비교하여 
        // 존재하면 수량만 1 증가, 없다면 배열에 신규 추가
        // 기존의 상품이 존재하는지의 여부를 판단하기 위해 매개변수 필요
    // 1. 자바 문법으로 만들기
        // const addToCart =(product)=>{
        //     // 얉은 복사 후 비교
        //     let cartCopy = [...cart];
        //     let findCheck = false; // 동일상품 존재유무 체크 변수
        //     for(let i=0;i<cart.length;i++){
        //         if(product.id === cartCopy[i].id){
        //             cartCopy[i].quantity += 1;
        //             findCheck = true;
        //             break;
        //         }
        //     } if(!findCheck){
        //         cartCopy.push(
        //             {id:product.id, 
        //             name:product.name, 
        //             price:product.price, 
        //             quantity:1});
        //     }
        //     setCart(cartCopy);
        //     console.log('장바구니 담겼나?' + cartCopy);
        // }
    // 2. 리액트 문법으로 만들기
        // 배열이름.findIndex((요소,인덱스,원본배열)=>return 조건) 
        // => 찾고 싶은 항목이 존재하면 그 오브젝트의 인덱스번호를 반환하고, 
        // 존재하지 않으면 -1 반환한다.
    const addCart =(product)=>{
        // 얉은 복사 후 비교
        let cartCopy = [...cart];
        const index = cart.findIndex((item)=>(item.id===product.id))
        // 존재하면 해당 인덱스 번호, 존재 x면 -1이 출력된다.
        if(index!=-1){
            cartCopy[index].quantity += 1;
        } else {
            cartCopy.push(
                    {id:product.id, 
                    name:product.name, 
                    price:product.price, 
                    quantity:1});
        }
        setCart(cartCopy);
        console.log('장바구니 담겼나?' + cartCopy);
    }

    return(

        <>
        <div>
            <h2>쇼핑몰</h2>
            <button type="button" onClick={()=>setShowCart(true)}>장바구니 보기</button>
            {/* 자식 컴포넌트 */}
            <ProductList 
                products={products}
                addCart={addCart}
             />
            {/* {showCart === true? <CartModal />:null} */}
            {showCart && 
            <CartModal 
                cart = {cart}
                showCart = {showCart}
                onClose = {()=>setShowCart(false)}
            />}
        </div>
        </>
    )
}