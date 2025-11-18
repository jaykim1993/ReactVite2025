import "./Footer.style.css";
import logo from '../logo.gif';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="eew">
        <ul className="footer-menu">
          <li>회사소개</li>
          <li>광고</li>
          <li>이용안내</li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>입점문의</li>
          <li>1:1문의</li>
          <li>이용후기</li>
          <li>홈으로</li>
          <li>뒤로가기</li>
        </ul>

        <div className="footer-content">
          <div className="footer-center">
            <h3>고객센터</h3>
            <p className="number">1899-4797</p>
            <p>평일 10:00~17:00</p>
            <p>점심시간 12:00~13:00</p>
            <p>토요일/일요일/공휴일 휴무</p>
          </div>
          <img src={logo} alt="logo" className="footer-logo" />

          <div className="footer-info">
            <p>COMPANY : (주)푸드장 / OWNER : 조재호 / CALL CENTER : 1899-4797 / FAX : 02-356-8448</p>
            <p>ADDRESS : 본사 (사무실) - 서울특별시 서초구 사평대로 52 (반포동) 2층 푸드장</p>
            <p>반품 주소지 (물류센터) - 경기도 고양시 일산동구 백석동 127-2 푸드장</p>
            <p>
              개인정보관리책임자 : 조재호  help@foodjang.com<br />
              사업자등록번호 : 118-87-00041  
            </p>
            <p>
              입금계좌 : (주)푸드장 - 기업은행 55303730040011 (기타 문의는 고객센터로 문의)
            </p>
            <p>
              Copyright ⓒ by foodjang.com. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
