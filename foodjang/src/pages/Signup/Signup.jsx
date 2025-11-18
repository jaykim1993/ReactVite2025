import './Signup.css'
import SearchPost from './SearchPost'
import { Link } from 'react-router-dom'

export default function Signup(){
    return(
        <div className='container'>
            <div id='joinWrap'>
                <div className='ee'></div>
                <h1>JOIN</h1>
                <p>회원가입하시면 다양한 혜택을 누리실 수 있습니다.</p>
                <div className='title'>
                    <h2>회원정보 입력</h2>
                    <p>*필수 입력사항 입니다.</p>
                </div>
                <form action='#' method='post'>
                        <ul className='joinForm'>
                        <li>
                            <label htmlFor='userID'>아이디</label>
                            <input type='text' name='userID' id='userID'/>
                        </li>
                        <li>
                            <label htmlFor='userPW'>비밀번호</label>
                            <input type='password' name='userPW' id='userPW'/>
                        </li>
                        <li>
                            <label htmlFor='userName'>이름</label>
                            <input type='text' name='userName' id='userName'/>
                        </li>
                        <li>
                            <label htmlFor='userEmail'>이메일</label>
                            <input type='email' name='userEmail' id='userEmail'/>
                        </li>
                        <li>
                            <label htmlFor='userPhone'>휴대폰번호</label>
                            <input type='tel' name='userPhone' id='userPhone'/>
                        </li>
                        <li>
                            <label htmlFor='userID'>아이디</label>
                            <input type='text' name='userID' id='userID'/>
                        </li>
                        <li>
                            <label>주소</label>
                            < SearchPost />
                        </li>
                        </ul>
                        <Link to="/login">
                            <button className="back-btn" type='button' id='joinBtn'>회원가입</button>
                        </Link>
                        <Link to="/menus">
                            <button className="back-btn">Back to main</button>
                        </Link>

                </form>
                </div>
        </div>
    )
}