// ProductItem.jsx
//손자(단일 항목 UI)
// 각 상품 정보 + 담기 버튼

export default function ProductItem(props) {

    return(
        <>
            <li>
                {props.product.name} - {props.product.price}원
                <button type="button" onClick={()=> props.addCart(props.product)}>담기</button>
            </li>
        </>
    )
    
}