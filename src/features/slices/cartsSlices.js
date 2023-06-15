import { createSlice } from "@reduxjs/toolkit";
import { gettingData } from "../actions/carts";

const cartsSlices = createSlice ({
    name : 'carts',
    initialState : {
        data : [],
        initialStateValue : '',
        isloading : false,
        errors : null
    },
    reducers : {
        valueFolow : (state, action) => {
            state.initialStateValue = action.payload;
        }
    },
    extraReducers : {
           [gettingData.pending] : (state) => {
            state.isloading = true;
           },
           [gettingData.fulfilled] : (state, action) => {
            state.data = action.payload;
            state.isloading = false;
           },
           [gettingData.rejected] : (state, action) => {
            state.errors = action.payload;
            state.isLoading = false
           }
        }
})

export const {valueFolow, initialStateValue, isloading, } = cartsSlices.actions
export default cartsSlices.reducer;