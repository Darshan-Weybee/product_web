import { configureStore } from '@reduxjs/toolkit'
import { getProductDetailReducer } from "../reducers/productDetail/productDetailReducer";
import { getProductListReducer } from "../reducers/productListing/productListingReducer";
import { authReducer } from '../reducers/auth/authReducer';

export default configureStore({
    reducer: {
        productListReducer : getProductListReducer,
        productDetailReducer : getProductDetailReducer,
        authReducer : authReducer
    },
  })