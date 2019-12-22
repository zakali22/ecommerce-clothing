import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Import the reducers
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer"
import collectionsReducer from "./collections/collections.reducer"

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	collections: collectionsReducer
})

const persistConfig = {
	'key': 'root',
	storage,
	'whitelist': ['cart']
}

export default persistReducer(persistConfig, rootReducer)