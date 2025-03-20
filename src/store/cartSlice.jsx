
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            let newItem = action.payload;
            state.cart.push(newItem);
        },
        remove: (state, action) => {

        }
    }
})

export default cartSlice.reducer;
export const {add, remove} = cartSlice.actions;