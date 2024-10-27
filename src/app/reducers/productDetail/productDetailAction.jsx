import { GET_PRODUCT_DETAIL_FAILURE, GET_PRODUCT_DETAIL_REQUEST, GET_PRODUCT_DETAIL_SUCCESS } from "../actionTypes";
import { failure, request, success } from "../dispatchFunctions";
import { getProductDetailService } from "./productDetailService";

export const getProducDetail = (productId) => {
    return (dispatch) => {
      dispatch(request(GET_PRODUCT_DETAIL_REQUEST));
  
      getProductDetailService(productId).then(
        (result) => {
          dispatch(success(GET_PRODUCT_DETAIL_SUCCESS, result.data));
        },
        (error) =>
          dispatch(
            failure(
              GET_PRODUCT_DETAIL_FAILURE,
              error?.message
            )
          )
      );
    };
  };