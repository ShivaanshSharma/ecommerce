
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        initialLoading: (state, action) => {
            if (state.products.length === 0) {
                const updatedIds = action.payload;
                updatedIds.map((item) => item.id = Math.floor(Math.random() * 1000000));
                state.products = updatedIds;
            }
        },
    }
})

export const {initialLoading, sayHello} = productsSlice.actions;
export default productsSlice.reducer;