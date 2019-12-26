import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Import the reducers
import userReducer from "./user/user.reducer"
import cartReducer from "./cart/cart.reducer"
import directoryReducer from "./directory/directory.reducer"
import collectionsReducer from "./collections/collections.reducer"

const persistConfig = {
	'key': 'root',
	storage,
	'whitelist': ['cart']
}

const cartPersistConfig = {
	'key': 'cart',
	storage, 
	'blacklist': ['openDropdown']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: persistReducer(cartPersistConfig, cartReducer),
	directory: directoryReducer,
	collections: collectionsReducer
})

export default persistReducer(persistConfig, rootReducer)