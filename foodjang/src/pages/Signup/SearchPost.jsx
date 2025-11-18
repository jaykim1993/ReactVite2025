import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'
import './Signup.css'

export default function SearchPost() {
    const [zipcode, setZipcode] = useState(''); 
    const [address, setAddress] = useState(''); 
    const [isOpen, setIsOpen] = useState(false);

    const completHandler = (data) => {
        let arr = '';
        if (data.userSelectedType === 'R') {
            arr = data.roadAddress;  // 도로명 주소
        } else {
            arr = data.jibunAddress; // 지번 주소
        }
        setZipcode(data.zonecode);
        setAddress(arr);

        setIsOpen(!isOpen);
    };

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="address-wrap">

    <div className="post-row">
        <input type='text' value={zipcode} placeholder='우편번호' readOnly id='post'/>
        <button type='button' id='userAddSearch' onClick={toggle}>
            우편번호 검색
        </button>
    </div>

    <input type='text' value={address} placeholder='도로명주소' readOnly id='userAddress'/>
    <input type='text' placeholder='상세주소' id='detailAddress'/>


            {isOpen && (
                <div className='modalOverlay'>
                    <div className='modalBox'>
                        <button className='closeBtn' onClick={toggle}>닫기 ✕</button>
                        <DaumPostCode onComplete={completHandler} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            )}
        </div>
    )
}
