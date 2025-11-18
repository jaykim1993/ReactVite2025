import { useSelector, useDispatch } from "react-redux";
import { 
    addItem, 
    increaseQty, 
    decreaseQty, 
    removeItem, 
    clearCart 
} from "./cartSlice";

export default function Cart() {
    const sampleProducts = [
        { id: 1, name: "사과", price: 1000 },
        { id: 2, name: "바나나", price: 1000 },
        { id: 3, name: "오렌지", price: 1000 },
    ];

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    // 총 금액 계산
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    console.log(items)
     return (
        <div style={{ padding: "20px" }}>
            {/* 상품 목록 */}
            <div style={{ border: "1px solid #777", marginBottom: "40px" }}>
                <h2>상품목록</h2>
                <ul>
                    {sampleProducts.map((item) => (
                        <li key={item.id} style={{ marginBottom: "10px" }}>
                            <b>
                                {item.name} - {item.price.toLocaleString()}원
                            </b>
                            <button
                                type="button"
                                onClick={() => dispatch(addItem(item))}
                            >
                                장바구니추가
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ border: "1px solid #777", padding: "10px" }}>
                <h2>장바구니</h2>

                {items.length === 0 ? (
                    <p>장바구니가 비어 있습니다.</p>
                ) : (
                    <>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id} style={{ marginBottom: "12px" }}>
                                    <b>
                                        {item.name} - {item.price.toLocaleString()}원 × {item.quantity}
                                    </b>
                                    <div style={{ marginTop: "5px" }}>
                                        <button
                                            onClick={() => dispatch(decreaseQty(item.id))}
                                        >
                                            -
                                        </button>
                                        <button
                                            onClick={() => dispatch(increaseQty(item.id))}
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeItem(item.id))}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <hr />

                        <h3>
                            총 금액:{" "}
                            {totalPrice.toLocaleString()}원
                        </h3>

                        <button onClick={() => dispatch(clearCart())}>
                            장바구니 비우기
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}