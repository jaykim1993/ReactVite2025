import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../store02/productSlice";
import { addCart } from "../store02/cartSlice";
import axios from 'axios'
import './cartpage.css'

export default function Section(){
    const items = useSelector((state)=> state.product.items); // productSlice로 접근
    const dispatch = useDispatch();
    useEffect(()=> {
        const load = async()=>{
            try{
                const res = await axios.get('https://dummyjson.com/products?limit=20');
                console.log(res.data);
                dispatch(setProducts(res.data.products))
                // productSlice의 setProducts reducer 실행
                // store의 state.product.items 갱신
                // UI 자동 렌더링 → 상품 리스트 화면 표시
            }catch(error){
                console.error('상품 데이터 요청 실패:', error);
            }finally{
                console.log('요청 완료')
            }
        }
        load();
    },[dispatch])
    const addCartHandler =(product)=>{
        dispatch(addCart(product));
        alert( `${product.title} 추가되었습니다.`)
    }


    return(
         <div className="cart-container"> 
            <h2> PRODUCT LIST</h2>
            <ul className="product-list">
            {items.map((dataitem) => (
                <li className="product-item" key={dataitem.id}>
                <img className="product-img" src={dataitem.thumbnail} alt={dataitem.title} />
                <h3 className="product-title">{dataitem.title}</h3>
                <span className="product-price">${dataitem.price.toLocaleString()}</span>
                <button className="add-cart-btn" onClick={() => addCartHandler(dataitem)}>
                    장바구니 추가
                </button>
                </li>
            ))}
            </ul>
        </div>
    )

}