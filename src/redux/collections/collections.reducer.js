import {collectionsActionTypes} from "./collections.types";

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action){	
	switch(action.type){
    case collectionsActionTypes.SET_COLLECTIONS_TO_STORE: 
      return action.payload
		default: 
			return state;
	}
}