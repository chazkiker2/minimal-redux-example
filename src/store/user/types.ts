import type * as actionTypes from "./action-types";

export interface State {
	name: string | null;
}

export interface ActionSetName {
	type: typeof actionTypes.SET_NAME;
	payload: string;
}

export interface ActionClearName {
	type: typeof actionTypes.CLEAR_NAME;
}

// TODO: other action interfaces

export type Action =
	| ActionSetName
	| ActionClearName
	// TODO: other actions
	;
