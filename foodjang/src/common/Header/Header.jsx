import { Link } from 'react-router-dom'
import "./Header.style.css";
import logo from '../logo.gif';

export default function Header() {


  return (
    <header className="header-container">
      
      <div className="top-menu">
        <button>로그인</button>
        <button>회원가입</button>
        <button>고객센터 ▼</button>
        <button>🛒 / 0</button>
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
