import { GET_PRODUCT_LIST_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS } from "../actionTypes";
import { failure, request, success } from "../dispatchFunctions";
import { getProductListService } from "./productListingService";

export const getProducList = (searchObj) => {
    return (dispatch) => {
      dispatch(request(GET_PRODUCT_LIST_REQUEST));
  
      getProductListService(searchObj).then(
        (result) => {
          dispatch(success(GET_PRODUCT_LIST_SUCCESS, result.data));
        },
        (error) =>
          dispatch(
            failure(
              GET_PRODUCT_LIST_FAILURE,
              error?.message
            )
          )
      );
    };
  };