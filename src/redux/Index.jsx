import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../redux/UserSlide";
import productSlideReducer from "../redux/ProductSlide";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSlideReducer,
  },
});
