import React from 'react';
import Navbar from './Navbar';
import './zippay.css';
import PaymentsGrid from './payments-grid/PaymentsGrid';
function ZipPayManager() {
	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<PaymentsGrid />
		</section>
	);
}

export default ZipPayManager;
