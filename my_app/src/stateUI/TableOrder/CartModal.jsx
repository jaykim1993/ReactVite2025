import React, { useState } from "react"

export default function CartModal(props) {
    const item = props.selectItem;


    // 이미 장바구니에 있는 항목 수량 가져오기
    const existingItem = props.cart.find((c) => c.id === item.id);
    const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 1);
    const total = item.price * quantity;
    // 수량 감소
    const handleMinus = () => {
        if (quantity > 1) setQuantity(quantity - 1);
        else alert("1개 이상 담아야 합니다.");
    };

    // 수량 증가
    const handlePlus = () => {
        if (quantity < 10) setQuantity(quantity + 1);
        else alert("최대 10개까지 가능합니다.");
    };

    // 장바구니에 추가하기
    const addToCart = () => {
        const updatedCart = [...props.cart];
        const index = updatedCart.findIndex((c) => c.id === item.id);

        if (index !== -1) {
        // 이미 장바구니에 있다면 수량 업데이트
        updatedCart[index].quantity = quantity;
        } else {
        // 없으면 새로 추가
        updatedCart.push({ ...item, quantity });
        }
        props.setCart(updatedCart);
        props.showCartlist(); // 장바구니 열기
        props.onClose(); // 모달 닫기
    };

    return (
        <div className="overlay">
            <div className="modal">
                <div className="modalHeader">{item.name}</div>
                <hr/>
                <img
                    src={`./tableImg/${item.src}`}
                    alt={item.name}
                    style={{ width: "140px", height: "110px" }}
                />
                <div className="info">{item.info}</div>
                
                <div className="qtyControl">
                    <button onClick={handleMinus}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlus}>+</button>
                    <span>{total.toLocaleString()}원</span>
                </div>
                <hr/>
                <div className="modalBtns">
                    <button
                        type="button"
                        className="cancelBtn"
                        onClick={() => props.onClose()}
                    >
                        취소
                    </button>

                    <button
                        type="button"
                        className="addBtn"
                        onClick={addToCart}
                    >
                        장바구니 추가
                    </button>
                </div>
                <button className="closeBtn" onClick={()=>props.onClose()}>X</button> 
            </div>
        </div>
    );
}


