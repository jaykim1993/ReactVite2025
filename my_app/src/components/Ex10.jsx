
function Ex10(){

    return(
      <nav>
        <ul 
        style={{display: 'flex',
        listStyle: 'none',
        backgroundColor: 'navy',
        margin: 0,
        padding: 0}}>
          <li 
            style={{height: '50px',
            width: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
                <a href="" 
                  style={{textDecoration:'none', color:'#fff'}}>
                    홈
                </a>
          </li>
          <li 
            style={{height: '50px',
            width: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
                <a href="" 
                  style={{textDecoration:'none', color:'#fff'}}>
                    소개
                </a>
          </li>
          <li 
            style={{height: '50px',
            width: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
                <a href="" 
                  style={{textDecoration:'none', color:'#fff'}}>
                    연락처
                </a>
          </li>
        </ul>
      </nav>
    )
}
export default Ex10;