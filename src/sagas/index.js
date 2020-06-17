import { fork } from "redux-saga/effects";
import watchProductSaga from './ProductSaga';
import watchMainSaga from './MainSaga';

export default function* rootSagas(){
    yield*[
        fork(watchProductSaga),
        fork(watchMainSaga)
    ];
}