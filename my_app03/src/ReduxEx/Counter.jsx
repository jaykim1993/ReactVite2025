// Counter.jsx 파일은 컴포넌트 파일로 UI
// useSelector와 useDispatch인 훅을 이용하여 상태를 읽고, 액션을 보낸다.
// useDispatch는 단순히 값만 보낸다.
// counterReducer가 그 값을 처리해서 store에 저장한다.
// Counter.jsx가 useSelector로 그걸 읽는다.
import { useSelector, useDispatch } from "react-redux";

export default function Counter(){
    const count = useSelector(state => state.count); // useSelector 이용해서 state의 count를 읽어온다.
    console.log('처음이야', count);
    const dispatch = useDispatch(); // useDispatch 이용해서 내보낸다.
    const plusHandler =()=>{
        if(count==10){
            alert('10입니다.')
        }else{
            dispatch({type : 'INCREMENT'})
        }
    }
    const minusHandler =()=>{
        if(count==0){
            alert('10입니다.')
        }else{
            dispatch({type : 'DECREMENT'})
        }
    }


    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={plusHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </>
    )
}