import type { State, Action } from "./types";
import * as actionTypes from "./action-types";

/** @private */
const initial: State = {
	name: null,
	age: null,
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		default:
			return state;

		case actionTypes.SET_NAME:
			return { ...state, name: action.payload };

		case actionTypes.SET_AGE:
			return { ...state, age: action.payload };

		case actionTypes.CLEAR:
			return { ...state, name: null, age: null };
	}
}
