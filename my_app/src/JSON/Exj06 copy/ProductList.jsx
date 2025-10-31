import ProductItem from "../Exj06/ProductItem";

export default function ProductList({items}) {
    
  return (
    <>
        {items.slice(0,20).map((product) => (
        <ProductItem 
        key = {product.id}
        product = {product}/>
        ))}
    </>

  );
}


