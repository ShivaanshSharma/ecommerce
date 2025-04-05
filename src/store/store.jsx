
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Slices/productsSlice';
import cartReducer from './Slices/cartSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
})