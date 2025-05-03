import {configureStore} from "@reduxjs/toolkit";
 import myreducer from "./cartSlice";

const store = configureStore({
    reducer:{
        mycart:myreducer
    }
})

export default store;