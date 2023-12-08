import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name:'p',
    initialState: {
        price: 0,
    },
    reducers: {
        addPrice: (state,action)=>{
            state.price += action.payload;
        },
        removePrice: (state,action)=>{
            state.price -= action.payload;
        },
        clearPrice: (state)=>{
            state.price = 0;
        },
    },
});

export const {addPrice,removePrice,clearPrice}  = priceSlice.actions;
export default priceSlice.reducer;
