import type * as actionTypes from "./action-types";

export interface State {
	name: string | null;
	age: number | null;
}

export interface PayloadMap {
	USER$SET_NAME: string;
	USER$SET_AGE: number;
	USER$CLEAR: never;
}

export interface ActionSetName {
	type: typeof actionTypes.SET_NAME;
	payload: string;
}

export interface ActionSetAge {
	type: typeof actionTypes.SET_AGE;
	payload: number;
}

export interface ActionClear {
	type: typeof actionTypes.CLEAR;
}

// TODO: other action interfaces

export type Action =
	| ActionSetName
	| ActionSetAge
	| ActionClear
	// TODO: other actions
	;
