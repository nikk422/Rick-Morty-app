import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slice/DataSlice";

export const Store= configureStore({
    reducer:{
        chardata:dataReducer
    }
})