import React from 'react';
import payments from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';

function PaymentsGrid() {
	return (
		<div className="pgContainer">
			<PaymentsGridHeader />
			<PaymentsGridBody payments={payments} />
		</div>
	);
}

export default PaymentsGrid;
