import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { types } from '../../types/types'
export const Navbar = () => {
	const dispatch = useDispatch();
	const [toLogin, setToLogin] = useState(false);
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});
		setToLogin(true);
	};

	if (toLogin === true) {
		return <Redirect to="/login" />
	}
	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-black">
			<Link className="navbar-brand" to="/">
				Movies App
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">

					<NavLink
						className="nav-item nav-link" activeClassName="active"
						to="/favorites">Favorites
					</NavLink>


				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{name}</span>
					<button onClick={handleLogout} className="nav-item nav-link btn">
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
