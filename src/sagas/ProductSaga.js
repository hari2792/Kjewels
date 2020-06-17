import{
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects';
import {
    getProductDetailsByIdCase
} from '../api/ProductApi';
import * as ProductActionType from '../actionType/ProductActionType';

function* getProductDetailsById(action){
    try{
        const getProductResponse = yield call(getProductDetailsByIdCase,action);
        const{
            data={},error
        } = getProductResponse;
        const err = data.error;
        if(error || err){
            const{
                message = ''
            } = data;
            yield put({
                type:ProductActionType.PRODUCT_FAILURE,
                error:message
            });
        }else{
            yield put({
                type:ProductActionType.PRODUCT_SUCCESS,
                data
            });
        }
    }
    catch(error){
        yield put({
            type:ProductActionType.PRODUCT_FAILURE,
            error
        });
    }
}

export default function* ProductSaga(){
    yield all([
        takeLatest(ProductActionType.PRODUCT_REQUEST,getProductDetailsById)
    ]);
}