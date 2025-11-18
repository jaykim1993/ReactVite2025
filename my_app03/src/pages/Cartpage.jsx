import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeCart,clearCart } from '../store02/cartSlice'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cartpage(){
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // cartSlice로 접근
    //useSelector가 store 상태 변경 감지
    // cartItems 배열 갱신
    // UI 자동 업데이트 → 장바구니 목록에 새 상품 표시
    const[total, setTotal] = useState(0)

    useEffect(()=>{
        let totalTemp = 0
        for (let i = 0; i < cartItems.length; i++) {
            totalTemp += cartItems[i].price * cartItems[i].quantity
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTotal(totalTemp)
    },[cartItems])
    
    return(
          <div className="cart-container">
            <h2> CART LIST</h2>
            {cartItems.length === 0?
            (
                <>
                    <h2>장바구니가 비었습니다 <br/><Link to='/'>HOME</Link></h2>
                    <div className="cart-bottom">
                        <h2>총 금액 = ${total.toFixed(2)}</h2>
                        <button className="remove-btn">
                            결제하기
                        </button>
                    </div>
                </>
            ):(
                <>
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="cart-item">
                                    <img className="cart-img" src={item.thumbnail} alt={item.title} />
                                    <div className="cart-info">
                                        <b className="cart-title">{item.title} - ${item.price.toLocaleString()}</b>
                                        <button className='qty-btn' onClick={() => dispatch(increaseQty(item.id))}>
                                            +
                                        </button>
                                        <span className="qty">{item.quantity}</span>
                                        <button className='qty-btn' onClick={() => dispatch(decreaseQty(item.id))}>
                                            -
                                        </button>
                                        <button className="remove-btn" onClick={() => dispatch(removeCart(item.id))}>
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
                            장바구니 비우기
                    </button>
                    <div className="cart-bottom">
                        <h2>총 금액 = ${total.toFixed(2)}</h2>
                        <button className="remove-btn">
                            결제하기
                        </button>
                    </div>
                </>
            )}
        </div>
    )

}