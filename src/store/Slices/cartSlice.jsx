
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const currentCartItems = state.cart;
            const found = currentCartItems.find(cartItem => cartItem.id === action.payload.id);
            const index = currentCartItems.indexOf(found);
            if (found) {
                state.cart[index].count++; 
            }
            else {
                let newItem = action.payload;
                state.cart.push(newItem);
            }
            let newTotal = state.total + action.payload.price;
            state.total = newTotal;
        },
        increment: (state, action) => {
            const found = state.cart.find((item => item.id === action.payload));
            const index = state.cart.indexOf(found);
            state.cart[index].count++;
            let newTotal = state.total + found.price;
            state.total = newTotal;
        },
        decrement: (state, action) => {
            const found = state.cart.find((item => item.id === action.payload));
            const index = state.cart.indexOf(found);
            state.cart[index].count--;
            if (state.cart[index].count === 0) {
                const filteredCart = state.cart.filter((item) => item.id !== action.payload);
                state.cart = filteredCart;
            }
            let newTotal = state.total - found.price;
            state.total = newTotal;
        }
    }
})

export default cartSlice.reducer;
export const {add, increment, decrement} = cartSlice.actions;