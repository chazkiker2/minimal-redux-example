import { useDispatch } from "react-redux";
import type * as user from "./user/types";

/** @private */
type PayloadMap =
	& user.PayloadMap
	// TODO: other sub-stores
	;

/** @private */
type ActionType =
	| keyof user.PayloadMap
	// TODO: other sub-stores
	;

/** @private */
type Params<Type extends ActionType> = PayloadMap[Type] extends never ? (
	readonly []
) : (
	readonly [ PayloadMap[Type] ]
);

/** @private */
interface Dispatcher<Type extends ActionType> {
	(...args: Params<Type>): void
}

export default function useAction<Type extends ActionType>(type: Type): Dispatcher<Type> {
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
