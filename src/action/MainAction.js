import * as MainActionType from '../actionType/MainActionType';

export const GetHeaderOptionDetails = (values ={})=>({
    type: MainActionType.HEADER_DETAIL_REQUEST,
    payload:values
});

export default{
    GetHeaderOptionDetails
}