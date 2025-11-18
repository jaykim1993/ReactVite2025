import { Link } from 'react-router-dom'
import { useContext, useEffect } from "react";
import { PersonalContext } from "../../context/PersonalContext";
import { LoginContext } from "../../context/LoginContext"
import { useNavigate } from 'react-router-dom';
import "./Header.style.css";
import logo from '../logo.gif';

export default function Header() {
  const { dataCopy, setDataCopy } = useContext(PersonalContext);
  const { userID, logout } = useContext(LoginContext);
  const wishTotalNum = dataCopy.reduce((acc, item) => acc + (item.wishlist ? 1 : 0), 0);
  const navi = useNavigate();


  return (
    <header className="header-container">
      <div className='ww' style={{width:'1280px', margin:'0 auto'}}>
        <div className="top-menu">
          {userID?
          (<><strong>{userID.toUpperCase()}</strong><strong onClick={logout}>로그아웃</strong></>):(<><Link to="/login"><strong>로그인</strong></Link><Link to={'/signup'}><strong>회원가입</strong></Link></>)}
          <strong onClick={()=>{userID? navi('/wish'):alert("로그인이 필요합니다.")}}>찜하기 ✔ / {wishTotalNum}</strong>
        </div>

        <div className="main-header">
          <Link to="/">
            <div className="logo-box">
              <img src={logo} alt="logo" /> <h1>CULINDARY TOUR</h1>
            </div>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/menus">
            <ul className="all-category">
              <li> <p className='reci'>RECIPIES</p> </li>
            </ul>
          </Link>
        </nav>
      </div>
    </header>
  );
}
