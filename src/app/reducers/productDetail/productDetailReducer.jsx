import { GET_PRODUCT_DETAIL_SUCCESS,GET_PRODUCT_DETAIL_REQUEST,GET_PRODUCT_DETAIL_FAILURE } from "../actionTypes";
  
  const initialState = {
    loading: false,
    productDetails: {},
    error: "",
  };
  
  export const getProductDetailReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case GET_PRODUCT_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_PRODUCT_DETAIL_SUCCESS:
        return {
          loading: false,
          productDetails: action.payload,
          error: "",
        };
      case GET_PRODUCT_DETAIL_FAILURE:
        return {
          loading: false,
          productDetails: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  