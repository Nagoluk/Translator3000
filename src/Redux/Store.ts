import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import HistoryReducer from "./HistoryReducer";
import TranslateReducer from "./TranslateReducer";
import thunkMiddleWare from "redux-thunk";

const Reducers = combineReducers({
    History: HistoryReducer,
    Translate: TranslateReducer,
})


type RootReducerType = typeof Reducers;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(Reducers, compose(applyMiddleware(thunkMiddleWare)));

export default store;




