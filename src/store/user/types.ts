export interface State {
	name: string | null;
	age: number | null;
}

export interface PayloadMap {
	USER$SET_NAME: string;
	USER$SET_AGE: number;
	USER$CLEAR: never;
}
