import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {items: []},
    // 동기적으로 상태를 변경하는 함수
    // 동기적이란, 버튼클릭 혹은 이벤트
    reducers: {
        setProducts:(state, action)=>{
            state.items = action.payload
        }
    }
})
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

// 컴포넌트에서 useSelector(state => state.products.items)로 접근