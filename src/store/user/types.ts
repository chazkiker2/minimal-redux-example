export interface State {
	name: string | null;
	age: number | null;
}

export type Action<Type = string, Payload = unknown> = {
	type: Type;
} & (Payload extends undefined ? {} : {
	payload: Payload;
});
