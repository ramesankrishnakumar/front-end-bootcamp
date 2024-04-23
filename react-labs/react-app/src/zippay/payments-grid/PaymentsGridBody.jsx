import React from 'react';

function PaymentsGridBody({ payments }) {
	return (
		<>
			{payments.map((payment) => (
				<div
					className="pgRow"
					key={payment.id}
				>
					<div className="sender">{payment.payorId}</div>
					<div className="recipient">{payment.payeeId}</div>
					<div className="date">{payment.datePaid}</div>
					<div className="amount">{payment.amount}</div>
					<div className="reason">{payment.reason}</div>
				</div>
			))}
		</>
	);
}

export default PaymentsGridBody;
