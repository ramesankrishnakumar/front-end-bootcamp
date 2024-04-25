import React from 'react';
import Navbar from './NavbarChildren';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
import { NavLink, Route, Routes } from 'react-router-dom';
import SendReceive from './send-receive/SendReceive';
import SplitBill from './split-bill/SplitBill';
import AccountSettings from './settings/AccountSettings';
import ZipPaySearch from './search/ZipPaySearch';

function ZipPayManagerChildren() {
	return (
		<section className="zippay-main">
			<Navbar>
				<NavLink to="send-receive">
					<span className="material-icons">currency_exchange</span>
					<br />
					Send/Receive
				</NavLink>

				<NavLink to="split-the-bill">
					<span className="material-icons">call_split</span>
					<br />
					Split the bill
				</NavLink>

				<NavLink to="payments-grid">
					<span className="material-icons">savings</span>
					<br />
					Balance
				</NavLink>

				<NavLink to="account-settings">
					<span className="material-icons">settings</span>
					<br />
					Account settings
				</NavLink>

				<NavLink to="search">
					<span className="material-icons">search</span>
					<br />
					Search
				</NavLink>
			</Navbar>
			<Routes>
				<Route
					path="send-receive"
					element={<SendReceive />}
				/>
				<Route
					path="split-the-bill"
					element={<SplitBill />}
				/>
				<Route
					path="payments-grid"
					element={<PaymentsGrid />}
				/>
				<Route
					path="account-settings"
					element={<AccountSettings />}
				/>
				<Route
					path="search"
					element={<ZipPaySearch />}
				/>
			</Routes>
		</section>
	);
}

export default ZipPayManagerChildren;
