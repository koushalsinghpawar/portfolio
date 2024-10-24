import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";
configureStore({
  reducer:{
    productdetails:slice
  }
})
export default store