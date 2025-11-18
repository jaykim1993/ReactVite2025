export default function CartList(props){

    return(
        <>
            {props.setShowCart?
                props.cart.map((cartItem)=> (
                    <div className="eachCart" key={cartItem.id}>
                        <div className="eachCartText">
                            <p>{cartItem.name}</p>
                            <div className='cartBtn'  onClick={()=>props.minusQty(cartItem.id)}>-</div>
                            {cartItem.quantity}
                            <div className='cartBtn'  onClick={()=>props.plusQty(cartItem.id)}>+</div>
                        </div>
                        <span className='cartDelBtn'onClick={()=>props.deleteItem(cartItem.id)}>Χ</span>
                    </div>
                )):null
            }
        </>
    )
}