import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

const rootReducers = combineReducers({
    cart: cartReducer
})

export default rootReducers;