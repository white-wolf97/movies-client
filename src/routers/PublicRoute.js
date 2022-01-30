import React from 'react';

export const PublicRoute = ({ children }) => {
	const { isLogged } = useSelector((state) => state.auth);
	return isLogged ? <Navigate to="/marvel" /> : children;
};
