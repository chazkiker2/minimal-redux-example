import type { ActionFrom } from "@parzh/typed-redux-actions";
import type { State, PayloadMap } from "./types";

/** @private */
type Action = ActionFrom<PayloadMap, keyof PayloadMap>;

/** @private */
const initial: State = {
	name: null,
	age: null,
};

export default function reducer(state = initial, action: Action): State {
	switch (action.type) {
		default:
			return state;

		case "USER$SET_NAME":
			return { ...state, name: action.payload };

		case "USER$SET_AGE":
			return { ...state, age: action.payload };

		case "USER$CLEAR":
			return { ...state, name: null, age: null };
	}
}
