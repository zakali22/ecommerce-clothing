import {createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk"

import rootReducer from "./root-reducer"

const middlewares = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

// Persist the store
const persistor = persistStore(store)

export {store, persistor};