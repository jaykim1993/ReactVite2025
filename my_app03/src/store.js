// 2단계. 
// store 만들기 (store.js)
// Redux의 중앙 저장소 역할을 하는 부분이다.
// slice를 store에 등록해야 컴포넌트에서 사용할 수 있다.

import { configureStore } from "@reduxjs/toolkit";
// import countReducer from './ReduxToolkit/counterSlice' // counterSlice를 임포트
// import cartReducer from './cartEx/cartSlice'
import cartReducer from './store02/cartSlice'
import productReducer from './store02/productSlice'

export const store = configureStore({
    reducer: {
        // counter: countReducer, // slice 등록 (key: state name);
        // cart: cartReducer,
        cart: cartReducer,
        product: productReducer,
    }

})
