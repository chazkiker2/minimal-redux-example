import type { State, Action } from "./types";
import * as actionTypes from "./action-types";

/** @private */
const initial: State = {
	name: null,
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		default:
			return state;

		case actionTypes.SET_NAME:
			return { ...state, name: action.payload };

		case actionTypes.CLEAR_NAME:
			return { ...state, name: null };
	}
}
