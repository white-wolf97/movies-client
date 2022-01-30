import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				username: action.payload.username,
			};

		case types.logout:
			return {};

		default:
			return state;
	}
};