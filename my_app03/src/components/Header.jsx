import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{ width:'100%', backgroundColor:'#999', padding:'20px 40px', boxSizing:'border-box' }}>
      <ul style={{ listStyle:'none', display:'flex', alignItems:'center', justifyContent:'space-between', margin:0, padding:0 }}>
        <li style={{ fontWeight:'bold', fontSize:'1.5rem', color:'white' }}>Redux 쇼핑몰</li>
        <div style={{ display:'flex', gap:'20px' }}>
          <Link to="/" style={{ color:'white', textDecoration:'none' }}><li>Home</li></Link>
          <Link to="/cart" style={{ color:'white', textDecoration:'none' }}><li>Cart</li></Link>
          <li style={{ color:'white', cursor:'pointer' }}>로그인</li>
        </div>
      </ul>
    </div>
  );
}
