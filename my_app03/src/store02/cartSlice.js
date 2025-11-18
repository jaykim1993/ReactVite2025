import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart", 
    initialState: {items : []},
    reducers: { 
        addCart: (state, action) => { // action.payload -> 장바구니 버튼 클릭 시 내보내지는 item.id값
            const alreadyInCart = state.items.find(item => item.id == action.payload.id);
            if (alreadyInCart) {
                alreadyInCart.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1}); // 스프레드 문법(spread Operator)
            }
        },

        increaseQty: (state, action) => { // action.payload -> +버튼 클릭 시 내보내지는 item.id값
            const itemID = state.items.find(item => item.id === action.payload);
            if (itemID) itemID.quantity += 1;
        },

        decreaseQty: (state, action) => {// action.payload -> -버튼 클릭 시 내보내지는 item.id값
            const itemID = state.items.find(item => item.id === action.payload);
            if (itemID) {
                itemID.quantity -= 1;
            }
            if (itemID.quantity == 0) {
                // 0개면 자동 삭제
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            
        },

        removeCart: (state, action) => { //// action.payload -> 삭제 클릭 시 내보내지는 item.id값
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});


export const { addCart, increaseQty, decreaseQty, removeCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// 컴포넌트에서 useSelector(state => state.cart.items) 로 접근