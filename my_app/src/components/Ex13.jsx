
function Ex13(){
    const listArr = [
  {id: '🌩️', name:'빠른 속도', desc:'초고속 처리'},
  {id: '🔐', name:'안전한 보안', desc:'강력한 암호화'},
  {id: '💎', name:'프리미엄', desc:'최고의 품질'},
]
    return(
      <>
        {listArr.map((imoji) => (
          <div className="listWrap" key={imoji.id} style={{width:'200px', height:'200px', border:'1px solid black', borderRadius:'10px', margin:'10px 0'}}>
            <h1>{imoji.id}</h1>
            <h2>{imoji.name}</h2>
            <p className="pDesc">{imoji.desc}</p>
          </div>
        ))}
      </>
      
    )
}
export default Ex13;