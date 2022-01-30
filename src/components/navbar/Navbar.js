import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">login</Link>
				</li>
				<li>
					<Link to="/register">Users</Link>
				</li>
			</ul>
		</nav>
	);
};
