export default function ProductItem({item}) {
const price = (Math.floor(Math.random()*1000));
  return (
    <div className="eachItem">
        <img src={`https://picsum.photos/150?random=${item.id}`}/>
        <p>{item.title.slice(0,14)}</p>
        <p>{price},000원</p>
    </div>
  );
}


