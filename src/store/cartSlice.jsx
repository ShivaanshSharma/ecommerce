
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {

            console.log(action.payload);

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
        },
        remove: (state, action) => {

        }
    }
})

export default cartSlice.reducer;
export const {add, remove} = cartSlice.actions;