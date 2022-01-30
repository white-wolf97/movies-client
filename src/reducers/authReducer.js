import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				email: action.payload.email,
				name: action.payload.name,
				token: action.payload.token
			};

		case types.logout:
			return {};

		default:
			return state;
	}
};