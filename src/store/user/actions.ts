import type { Action } from "./types";

import {
	SET_NAME,
	SET_AGE,
	CLEAR,
	// TODO: other action types
} from "./action-types";

// Note how payload type (string) is specified twice:
// first next to the function parameter declaration,
// then as the second parameter of the Action generic
export const setName = (name: string): Action<typeof SET_NAME, string> => ({
	type: SET_NAME,
	payload: name,
});

export const setAge = (age: number): Action<typeof SET_AGE, number> => ({
	type: SET_AGE,
	payload: age,
});

export const clear = (): Action<typeof CLEAR, undefined> => ({
	type: CLEAR,
});
