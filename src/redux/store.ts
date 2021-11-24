import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {countriesReducer} from "./reducers/countriesReducer";

const rootReducer = combineReducers({
    countries: countriesReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)
// @ts-ignore
window.store = store
export default store
