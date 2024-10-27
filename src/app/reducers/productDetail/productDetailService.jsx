import { PRODUCT_DETAIL_API_ENDPOINT } from "../../helpers/config";
import { axiosInstance } from "../axiosInstance";

export const getProductDetailService = (productId) => {
    return axiosInstance.get(`${PRODUCT_DETAIL_API_ENDPOINT}${productId}`);
  };