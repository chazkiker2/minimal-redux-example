// TODO: remove unused module

import type {
	ActionSetName,
	ActionSetAge,
	ActionClear,
	// TODO: other action interfaces
} from "./types";

import {
	SET_NAME,
	SET_AGE,
	CLEAR,
	// TODO: other action types
} from "./action-types";

export const setName = (name: string): ActionSetName => ({
	type: SET_NAME,
	payload: name,
});

export const setAge = (age: number): ActionSetAge => ({
	type: SET_AGE,
	payload: age,
});

export const clear = (): ActionClear => ({
	type: CLEAR,
});
