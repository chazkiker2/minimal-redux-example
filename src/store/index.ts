import { combineReducers, createStore } from "redux";

import type { State as UserState } from "./user/types";
import userReducer from "./user/reducer";

export interface State {
	user: UserState;
}

export default createStore(combineReducers({
	user: userReducer,
}));
