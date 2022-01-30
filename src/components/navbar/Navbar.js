import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { types } from '../../types/types'
export const Navbar = () => {
	const dispatch = useDispatch();
	const [toLogin, setToLogin] = useState(false);
	const [toInternalServerError, setToInternalServerError] = useState(false);
	const { name, token } = useSelector((state) => state.auth);

	const handleLogout = () => {
		fetch(process.env.REACT_APP_API_URL + '/auth/logout', {
			method: 'POST',
			headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 'success') {
					setToLogin(true);
					dispatch({
						type: types.logout,
					});
				}
				else {
					setToInternalServerError(true);
				}
			})
			.catch((err) => console.log(err))
	};

	if (toLogin === true) {
		return <Redirect to="/login" />
	}
	if (toInternalServerError === true) {
		return <Redirect to="/error" />
	}
	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-black navbar__nav">
			<Link className="navbar-brand" to="/">
				Movies App
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav ">
					<NavLink
						className="nav-item nav-link" activeClassName="active"
						to="/favorites"><div className="navbar__inner-div"><i className="far fa-heart navbar__icon" />Favorites</div>
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{name}</span>

					<button onClick={handleLogout} className="nav-item nav-link btn">
						<div>
							<i class="fas fa-sign-out-alt navbar__icon"></i>
							Logout
						</div>
					</button>
				</ul>
			</div>

		</nav>
	);
};
