import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    totalQuantity: 0,
    totalPrice: 0,
    cart: []
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { id: ID } = action.payload;
            const found = state.cart.find(prod => prod.id === ID);

            if (!found) {
                state.cart.push({ ...action.payload, qty: 1 });
            } else {
                found.qty++;
            }


            state.totalPrice += action.payload.price;
            state.totalQuantity++;
            console.log(current(state));

        }
    }
})

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;