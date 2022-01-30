import { types } from "../types/types"

export const doLogin = (email, name) => {
	return (
		{
			type: types.login,
			payload: {
				email, name
			}
		}
	)
}