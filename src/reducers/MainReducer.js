import * as MainActionType from '../actionType/MainActionType';

const MainReducer = (state ={},action)=>{
    let newState={};
    switch(action.type){
        case MainActionType.HEADER_DETAIL_REQUEST:
            newState = Object.assign({},state);
            newState.isLoader = true;
            newState.headerDetails = [];
            return newState;
        case MainActionType.HEADER_DETAIL_SUCCESS:
            newState = Object.assign({},state);
            newState.isLoader = false;
            newState.headerDetails = action.data;
            return newState;
        case MainActionType.HEADER_DETAIL_FAILURE:
            newState = Object.assign({},state);
            newState.isLoader = false;
            return newState;
        default:
            return newState;
    }
};

export default MainReducer;