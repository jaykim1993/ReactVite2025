import { useEffect, useState } from "react";
import axios from 'axios'

export default function Test(){
    const [items, setItems]=useState([]);
    useEffect(()=> {
        // load라는 비동기 함수를 만들어서 API 요청과 상태 업데이트를 처리
        const load = async()=>{
            try{
                // axios.get()을 사용하여 API 호출
                const res = await axios.get('https://dummyjson.com/products?limit=20');
                console.log(res.data);
                const newData = res.data.products.map((item) => ({
                    ...item,
                    quantity: 1
                }));
                setItems(newData)
                // dispatch(set내가만든함수(items))
            }catch(error){
                console.error('상품 데이터 요청 실패:', error);
            }finally{
                console.log('요청 완료')
            }
        }
        load();
    },[])
    console.log(items)
    return(
        <>
        <ul>
            {items.map((dataitem)=>(
                <li key={dataitem.id}>
                    <img src={dataitem.images[0]}/>
                    <h2>{dataitem.title}</h2>
                    ${dataitem.price.toLocaleString()}
                </li>
            ))}
        </ul>
        </>
    )
}

// reducers:
// setProduct:(state, action)