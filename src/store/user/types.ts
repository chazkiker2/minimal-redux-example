import type * as actionTypes from "./action-types";

export interface State {
	name: string | null;
	age: number | null;
}

/** @private */
type ActionType =
	| typeof actionTypes.SET_NAME
	| typeof actionTypes.SET_AGE
	| typeof actionTypes.CLEAR
	// TODO: other action types
	;

// Note that there is a nasty side effect to constructing
// type unions like this: if one of the members is a subset
// of another member (e.g., any string type literal is a subset
// of the type `string`), the information about "narrower" member
// is lost; here "Jack" and "Jill" are completely lost from `Payload`

/** @private */
type Payload =
	| string
	| number
	| "Jack"
	| "Jill"
	// TODO: other payloads
	;

export type Action<Type = ActionType, Payload_ = Payload> = {
	type: Type;
} & (Payload_ extends undefined ? {} : {
	payload: Payload_;
});
