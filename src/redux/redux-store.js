import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slice/main-slice";
import cartSlice from "./slice/cart-slice";

const store = configureStore({
    reducer: {
        mainSlice,
        cartSlice
    }

})

export default store;