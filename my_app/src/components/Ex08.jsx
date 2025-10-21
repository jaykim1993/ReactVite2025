
function Ex08(){
const menu = [
  {name:'김치찌개', desc:'얼큰한 김치찌개', price:8000},
  {name:'된장찌개', desc:'구수한 된장찌개', price:7000},
  {name:'비빔밥', desc:'건강한 비빔밥', price:9000},
]
    return(
      <>
        {menu.map((item) => (
          <div className="menuWrap" key={item.name}>
            <h2>{item.name}</h2>
            <p className="pDesc">{item.desc}</p>
            <p className="pPrice">{item.price.toLocaleString()}원</p>
          </div>
        ))}
      </>
        
    )
}
export default Ex08;