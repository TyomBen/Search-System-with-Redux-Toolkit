import { configureStore } from "@reduxjs/toolkit";
import cartsSlices from "./slices/cartsSlices";

export const store = configureStore ({
    reducer : {
        carts : cartsSlices
    }
})