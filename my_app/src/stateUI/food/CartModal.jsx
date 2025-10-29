export default function CartModal(props){

    return(
        <>
            <div>
                <div>
                    <h4>장바구니</h4>
                    {props.cart.length === 0?<p>장바구니가 비어있습니다.</p>
                     : <ul>
                         {props.cart.map((cartItem, index)=> (
                             <li key={cartItem.id} style={{display:'flex'}}>
                                 {cartItem.name}  
                                 <button type="button" onClick={()=>props.minusQty(index)}>-</button>
                                    {cartItem.quantity}
                                 <button type="button" onClick={()=>props.plusQty(index)}>+</button>
                                 <button type="button" onClick={()=>props.deleteItem(index)}>삭제</button>
                             </li>
                        ))}
                     </ul>
                     }
                     <button type="button" onClick={props.onClose}>닫기</button>
                 </div>
            </div>
        </>
    )
}

