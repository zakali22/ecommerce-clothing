import {combineReducers} from "redux"

// Import the reducers
import userReducer from "./user/user.reducer"

export default combineReducers({
	user: userReducer
})