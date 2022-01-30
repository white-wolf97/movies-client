import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
	const { email } = useSelector((state) => state.auth);
	return email ? <Redirect to="/movies" /> : children;
};
