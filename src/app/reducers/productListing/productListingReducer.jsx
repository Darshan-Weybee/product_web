import { GET_PRODUCT_LIST_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS } from "../actionTypes";
  
  const initialState = {
    loading: false,
    products: {},
    error: "",
  };
  
  export const getProductListReducer = (
    state = initialState,
    action
  ) => {
    switch (action.type) {
      case GET_PRODUCT_LIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: "",
        };
      case GET_PRODUCT_LIST_FAILURE:
        return {
          loading: false,
          products: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  