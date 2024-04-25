import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<>
			<header className="page-header">
				<h1>The ZipPay app</h1>
			</header>
			<nav className="navbar-list">
				<ul>
					<NavBarItem to="send-receive">
						<span className="material-icons">currency_exchange</span>
						<br />
						Send/Receive
					</NavBarItem>
					<NavBarItem to="split-the-bill">
						<span className="material-icons">call_split</span>
						<br />
						Split the bill
					</NavBarItem>
					<NavBarItem to="payments-grid">
						<span className="material-icons">savings</span>
						<br />
						Balance
					</NavBarItem>
					<NavBarItem to="settings">
						<span className="material-icons">settings</span>
						<br />
						Account settings
					</NavBarItem>
					<NavBarItem to="search">
						<span className="material-icons">search</span>
						<br />
						Search
					</NavBarItem>
				</ul>
			</nav>
		</>
	);
}

function NavBarItem({ to, children }) {
	let navigate = useNavigate();
	return (
		<>
			<li onClick={() => navigate(to)}>
				<NavLink to={to}>{children}</NavLink>
			</li>
		</>
	);
}

export default Navbar;
