import React from 'react';
import payments from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';

function PaymentsGrid() {
	let columnMap = [
		{ label: 'ID', field: 'id', visible: false },
		{ label: 'Sender', field: 'payorId', visible: true },
		{ label: 'Recipient', field: 'payeeId', visible: true },
		{ label: 'Date', field: 'datePaid', visible: false },
		{ label: 'Amount', field: 'amount', visible: true },
		{ label: 'Reason', field: 'reason', visible: true },
	];
	return (
		<div className="pgContainer">
			<PaymentsGridHeader columnMap={columnMap} />
			<PaymentsGridBody
				columnMap={columnMap}
				payments={payments}
			/>
		</div>
	);
}

export default PaymentsGrid;
