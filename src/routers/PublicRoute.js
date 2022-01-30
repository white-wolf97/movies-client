import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
	const { username } = useSelector((state) => state.auth);
	return username ? <Navigate to="/marvel" /> : children;
};
