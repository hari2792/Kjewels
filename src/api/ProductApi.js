import { defaultHeaders, Config } from "../common/config";
import * as configUrl from '../components/common/config';
import RestClient from "./RestClient";

const authorizationHeaders = Object.assign({}, defaultHeaders);

export function getProductDetailsByIdCase(data){
    const config = {};
    config.url = `${Config.ApiConfig()}${configUrl.getProductByIdUrl}`;
    config.headers = authorizationHeaders;
    return RestClient.get(config).then(json => json);

}