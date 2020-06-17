import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import MainReducer from "./MainReducer";

const allReducers = combineReducers({
    Product:ProductReducer,
    Main:MainReducer
});

export default allReducers;