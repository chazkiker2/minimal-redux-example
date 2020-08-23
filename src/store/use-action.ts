import { useDispatch } from "react-redux";

// TODO: set proper type for the `type` parameter of `useAction`
// TODO: set type and presence of `payload` in `Dispatcher`, depending on the action type

/** @private */
interface Dispatcher {
	(payload?: unknown): void
}

export default function useAction(type: string): Dispatcher {
	const dispatch = useDispatch();

	return (...args): void => {
		dispatch(args.length === 1 ? {
			type,
			payload: args[0],
		} : {
			type,
		});
	};
}
