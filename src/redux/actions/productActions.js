import { ActionTypes } from "../constants/productConstants";

export const setProduct=(products)=>{
    return({
        type:ActionTypes.SET_PRODUCT,
        payload:products
    });
}

export const selectedProduct=(product)=>{
    return({
       type:ActionTypes.SELECTED_PRODUCTS,
       payload:product
    });
}