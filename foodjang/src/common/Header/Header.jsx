import { Link } from 'react-router-dom'
import { useContext } from "react";
import { PersonalContext } from "../../context/PersonalContext";
import "./Header.style.css";
import logo from '../logo.gif';

export default function Header() {
  const { dataCopy } = useContext(PersonalContext);
  const wishTotalNum = dataCopy.reduce((acc, item) => acc + (item.wishlist ? 1 : 0), 0);
  return (
    <header className="header-container">
      
      <div className="top-menu">
        <Link to="/login"><button>로그인</button></Link>
        <button>회원가입</button>
        <button>찜하기 ✔ / {wishTotalNum}</button>
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
            <li > 추천 </li>
            <li>분류</li>
            <li>랭킹</li>
            <li>알뜰쇼핑</li>
            <li>🎁 선물세트</li>
            <li>이벤트</li>
            <li>스토리</li>
          </ul>
        </Link>
      </nav>
    </header>
  );
}
