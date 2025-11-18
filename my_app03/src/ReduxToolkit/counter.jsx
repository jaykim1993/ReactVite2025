// 4단계

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
//  버튼 클릭과 같은 이벤트핸들러(함수)는 ui에서 하는게 맞고 나머지는 slice에서 한다.
    const plusHandler =()=>{
        if(value==10){
            alert('10 이상은 불가합니다.')
        }else{
            dispatch(increment())
        }
    }
    const minusHandler =()=>{
        if(value==0){
            alert('0 이하는 불가합니다.')
        }else{
            dispatch(decrement())
        }
    }
    const plus5Handler =()=>{
        if(value==10){
            alert('10 이상은 불가합니다.')
        }else{
            dispatch(incrementByAmount(5))
        }
    }
  return (
    <div>
      <h1>카운터 : {value}</h1>

      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={plus5Handler}>+5</button>
    </div>
  );
}