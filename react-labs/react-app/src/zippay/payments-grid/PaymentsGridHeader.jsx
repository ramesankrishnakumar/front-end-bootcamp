import React from 'react';

function PaymentsGridHeader() {
	return (
		<div className="pgHeader">
			<div className="sender">Sender</div>
			<div className="recipient">Recipient</div>
			<div className="date">Date</div>
			<div className="amount">Amount</div>
			<div className="reason">Reason</div>
		</div>
	);
}

export default PaymentsGridHeader;
