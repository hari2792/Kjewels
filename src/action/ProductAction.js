import * as ProductActionType from '../actionType/ProductActionType';

export const GetProductById = (values ={})=>({
    type: ProductActionType.PRODUCT_REQUEST,
    payload:values
});

export default{
    GetProductById
}