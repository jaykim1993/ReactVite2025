// counterReducer.js 파일은
// 상태(state)와 동작(action)을 정의하는 가장 핵심 로직이다.
// Redux의 동작원리
// Reducer -> Store -> provider -> Component

const initialState = {count:0} // initialState는 예약어이다(약속)

// 리듀서 함수 (Reducer Function)
// - "상태(state)"와 "액션(action)"을 받아서 새로운 상태를 반환하는 순수 함수
// - 기존 state를 직접 변경하지 않고, 항상 새로운 객체를 반환해야 함
export default function conterReducer(state=initialState, action){
    // switch 문을 이용하여 직접 함수를 생성해야 함.
    switch(action.type){
        case 'INCREMENT':
            return { count:state.count + 1}; // count가 1씩 증가하는 함수
        case 'DECREMENT':
            return { count:state.count -1 } // count가 1씩 감소하는 함수
        default: 
            return state;
    }
}
