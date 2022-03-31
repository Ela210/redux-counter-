import {createStore} from "redux";
import { reducerCounter } from "./Reducer";
export const store=createStore(
    reducerCounter,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()

);