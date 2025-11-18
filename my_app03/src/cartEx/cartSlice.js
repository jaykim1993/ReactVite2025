import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", // store에 저장될 key가 되는 이름, 아주 중요
    initialState: {items : []}, // 1. 저장소 구조 정의
    reducers: { 
         addItem: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                // 이미 존재 → 수량만 증가
                existing.quantity += 1;
            } else {
                // 최초 추가 → quantity = 1
                state.items.push({ ...action.payload, quantity: 1 }); // quantity key:value 추가하기
            }
        },

        increaseQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) item.quantity += 1;
        },

        decreaseQty: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity == 0) {
                    // 0개면 자동 삭제
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});


// 3. actions(명령서) 자동 생성
export const {  // 위에서 작성한 로직, 이름 모두 export
    addItem, 
    increaseQty, 
    decreaseQty, 
    removeItem, 
    clearCart 
} = cartSlice.actions;
export default cartSlice.reducer; // switch ~ case 문을 이용한 함수 자동생성 부분