export default function Product({name, price}){
  return (
    <div style={{border:'1px solid grey', margin:'10px 0', borderRadius:'10px'}}>
      <h2>{name}</h2>
      <p>가격: {price.toLocaleString()}원</p>
    </div>
  )
}