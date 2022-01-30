import { types } from "../types/types"

export const doLogin = (email) => {
	return (
		{
			type: types.login,
			payload: {
				email
			}
		}
	)
}