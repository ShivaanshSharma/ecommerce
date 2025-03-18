
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initialLoading: (state, action) => {
            state.products = action.payload;
        },
        sayHello: (state) => {
            console.log("hello!");
        }
    }
})

export const {initialLoading, sayHello} = productsSlice.actions;
export default productsSlice.reducer;