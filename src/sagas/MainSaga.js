import{
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects';
import {
    getHeaderOptionDetailsCase
} from '../api/MainApi';
import * as MainActionType from '../actionType/MainActionType';

function* getHeaderOptionDetails(action){
    try{
        const getProductResponse = yield call(getHeaderOptionDetailsCase,action);
        const{
            data={},error
        } = getProductResponse;
        const err = data.error;
        if(error || err){
            const{
                message = ''
            } = data;
            yield put({
                type:MainActionType.HEADER_DETAIL_FAILURE,
                error:message
            });
        }else{
            yield put({
                type:MainActionType.HEADER_DETAIL_SUCCESS,
                data
            });
        }
    }
    catch(error){
        yield put({
            type:MainActionType.HEADER_DETAIL_FAILURE,
            error
        });
    }
}

export default function* MainSaga(){
    yield all([
        takeLatest(MainActionType.HEADER_DETAIL_REQUEST,getHeaderOptionDetails)
    ]);
}