// 모달 UI
// 장바구니 상세 정보 표시

export default function CartModal(props){

    return(
        <>
            <div style={{position:'fixed', top:0, left:0, width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.3)', display:'flex',justifyContent:'center'}}>
                <div style={{backgroundColor:'whitesmoke',height:'30%', borderRadius:'5px', padding:'20px',width:'300px'}}>
                    <h4>장바구니</h4>
                    {props.cart.length === 0?<p>장바구니가 비어있습니다.</p>
                     : <ul>
                         {props.cart.map((cartItem)=> (
                             <li key={cartItem.id} style={{display:'flex'}}>
                                 {cartItem.name} X {cartItem.quantity}
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