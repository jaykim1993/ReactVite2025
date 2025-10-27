// ProductList.jsx
// 리스트 UI
// Products 배열을 받아 출력

import ProductItem from "../shop/ProductItem"


export default function ProductList(props) {
  return (
      <>
        <ul>
          {props.products.map((product)=>(
              <ProductItem 
                key = {product.id}
                product={product}
                addCart={props.addCart}
              />
          ))}
        </ul>
      </>
  );
}

