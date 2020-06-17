import * as ProductActionType from '../actionType/ProductActionType';

const ProductReducer = (state ={},action)=>{
    let newState={};
    switch(action.type){
        case ProductActionType.PRODUCT_REQUEST:
            newState = Object.assign({},state);
            newState.isLoader = true;
            newState.productResponse = {};
            return newState;
        case ProductActionType.PRODUCT_SUCCESS:
            newState = Object.assign({},state);
            newState.isLoader = false;
            newState.productResponse = action.data;
            return newState;
        case ProductActionType.PRODUCT_FAILURE:
            newState = Object.assign({},state);
            newState.isLoader = false;
            return newState;
        default:
            return newState;
    }
};

export default ProductReducer;