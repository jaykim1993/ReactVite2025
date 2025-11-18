
function Ex06(){

    const imgArr = [ 
      { id: 1, name: '푸른 바다'},
      { id: 2, name: '아름다운 산'},
      { id: 3, name: '멋진 야경'},
    ]
    return(
        <div className="gallery">
          {imgArr.map((img) => (
            <div key={img.id} className="imgCard">
              <img src='../public/images/image0{img.id}.png' alt="풍경2"/>
              <p>{img.name}</p>
            </div>
          ))}
          
        </div>
    )
}
export default Ex06;