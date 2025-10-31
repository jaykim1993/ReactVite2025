export default function ProductItem({product}) {
  return (
    <div className="eachItem">
        <img src={product.img}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  );
}


