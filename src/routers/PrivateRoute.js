
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { email } = useSelector((state) => state.auth);
	const { pathname, search } = useLocation();
	localStorage.setItem("lastPath", pathname + search);
	return email ? children : <Redirect to="/login" />;
};