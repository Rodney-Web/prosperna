import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            //exist ? return quantity : .push()
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity++
            } else {
                state.cart.push({...action.payload, quantity: 1})
            }
        },
    }
})

export const { addToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;