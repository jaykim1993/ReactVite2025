import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { PersonalContext } from "../../context/PersonalContext";
import { LoginContext } from "../../context/LoginContext";
import './Wishlist.css'

export default function Wishlist() {
    const { dataCopy, removeFromWishlish } = useContext(PersonalContext);
    const { userID } = useContext(LoginContext);
    const navigate = useNavigate();

    const wishlist = dataCopy.filter(item => item.wishlist === true);
    const wishTotalNum = wishlist.length;

    const handleRemove = (id) => {
        removeFromWishlish(id); // Context 업데이트


        const updatedList = dataCopy.filter(item => item.wishlist === true);

        if (updatedList === 0) {
            alert("목록이 없습니다.");
            navigate('/');
        }

    };
    return (
        <div className="wishwrap">
            <div className="wishlist">
                <div className="wishlist-section">
                    <h2>{userID}' Wishlist</h2>
                    <ul className='ae'>
                        {wishlist.map((item) => (
                            <li key={item.id}>
                                <div className='eachlist'>
                                    <img className="it" src={item.image} />
                                    <Link to={`/detail/${item.id}`}>
                                        <div className='listText'>
                                            {item.name}<br></br>{item.cuisine} {item.rating}
                                        </div>
                                    </Link>
                                    <div className='remover' onClick={() => handleRemove(item.id)}>
                                        remove
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h2>Total : {wishTotalNum}</h2>
                </div>
            </div>
            <Link to="/menus">
                <button className="back-btn">Back to main</button>
            </Link>
        </div>
    );
}
