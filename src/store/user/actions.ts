import type {
	ActionSetName,
	ActionClearName,
	// TODO: other action interfaces
} from "./types";

import {
	SET_NAME,
	CLEAR_NAME,
	// TODO: other action types
} from "./action-types";

export const setName = (name: string): ActionSetName => ({
	type: SET_NAME,
	payload: name,
});

export const clearName = (): ActionClearName => ({
	type: CLEAR_NAME,
});
