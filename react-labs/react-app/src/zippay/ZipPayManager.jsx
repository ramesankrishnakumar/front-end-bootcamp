import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
import { Route, Routes } from 'react-router-dom';
import SendReceive from './send-receive/SendReceive';
import SplitBill from './split-bill/SplitBill';
import ZipPaySearch from './search/ZipPaySearch';
import AccountSettings from './settings/AccountSettings';
import UserDetailsLookUp from './user-details/UserDetailsLookUp';
function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar></Navbar>

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
					path="search"
					element={<ZipPaySearch />}
				/>
				<Route
					path="payments-grid"
					element={<PaymentsGrid />}
				/>
				<Route
					path="settings"
					element={<AccountSettings />}
				/>
				<Route
					path="user-details/:userId"
					element={<UserDetailsLookUp />}
				/>
			</Routes>
		</section>
	);
}

export default ZipPayManager;
