import { PRODUCT_LISTING_API_ENDPOINT } from "../../helpers/config";
import { getSearchQueryString } from "../../helpers/helperFunctions";
import { axiosInstance } from "../axiosInstance";

export const getProductListService = (searchObj) => {
  const queryString = getSearchQueryString(searchObj);
    return axiosInstance.get(`${PRODUCT_LISTING_API_ENDPOINT}?${queryString}`);
  };