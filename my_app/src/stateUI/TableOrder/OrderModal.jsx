export default function OrderModal(props) {
    // 총 주문 금액 reduce 사용
    const totalPrice = props.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
            <div className="overray">
                <div className="modal">
                    <h3>🧾 주문 내역</h3>
                    <div className="orderInfo">
                    {props.order.map((orderItem, index)=> (
                        <div key={index}>
                                <span>◈  {orderItem.name} - {orderItem.quantity} x {orderItem.price.toLocaleString()}원 </span>
                        </div>
                    ))}
                    </div>
                    <span>주문 금액 : {totalPrice.toLocaleString()}원</span>
                    <button onClick={()=>props.onClose()}>닫기</button>          
                    <button className="closeBtn" onClick={()=>props.onClose()}>X</button>          
                </div>
            </div>
    );
}
