import type { State, Action } from "./types";
import * as actionTypes from "./action-types";

/** @private */
const initial: State = {
	name: null,
	age: null,
};

// Note that, despite all the types being specified,
// there is no action-to-payload correspondence.
// In other words, the "SET_NAME" action really accepts
// only `string`, but action.payload will be typed as
// any possible payload, not only `string`

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		default:
			return state;

		case actionTypes.SET_NAME:
			return { ...state, name: action.payload as string };

		case actionTypes.SET_AGE:
			return { ...state, age: action.payload as number };

		case actionTypes.CLEAR:
			return { ...state, name: null, age: null };
	}
}
