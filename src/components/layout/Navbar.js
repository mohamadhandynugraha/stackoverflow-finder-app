import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
	return (
		<nav className="navbar bg-primary">
			<Link to="/" style={linkWhite}>
				<h1>
					<i className={icon} style={{ width: '30', height: '30' }} /> {title}
				</h1>
			</Link>
			<nav className="my-2 my-md-0 mr-md-3">
				<Link to="/" style={linkWhite} className="p-2">
					Home
				</Link>
				<Link to="/about" style={linkWhite} className="p-2">
					About
				</Link>
			</nav>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Finder',
	icon: 'fab fa-stack-overflow'
};

const linkWhite = {
	color: '#fff'
};

export default Navbar;
