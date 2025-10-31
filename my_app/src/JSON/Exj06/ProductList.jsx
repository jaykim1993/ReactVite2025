import ProductItem from "../Exj06/ProductItem";

export default function ProductList({items}) {

  return (
    <>
        {items.map((item) => (
        <ProductItem 
        key = {item.id}
        item = {item}/>
        ))}
    </>

  );
}


