import { types } from "../types/types"

export const doLogin = (email, name, token) => {
	return (
		{
			type: types.login,
			payload: {
				email, name, token
			}
		}
	)
}