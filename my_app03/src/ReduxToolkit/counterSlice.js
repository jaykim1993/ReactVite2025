// 1단계
// slice 파일 만들기 (counterSlice.js)
// Redux의 “상태 + 로직”을 정의하는 부분이다.
// 이 단계에서 state 구조, state를 변경하는 reducer 함수,
// 그리고 action 생성 함수를 정의한다.
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",  //state의 이름 (store에서 접근할 때 key로 사용됨)
  // 초기값은 0, 'a', boolean(t/f), {item : []}, {object:{id:1, name:'kiwi'}} 등등 가능
  initialState: { value: 0 },  //초기상태 0
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
        state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// 액션들 자동 생성됨
export const {increment, decrement, reset, incrementByAmount} = countSlice.actions;

console.log(countSlice.actions);
// reducer export
export default countSlice.reducer;