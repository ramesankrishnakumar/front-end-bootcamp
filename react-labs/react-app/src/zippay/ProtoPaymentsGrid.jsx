import React from 'react';
import './ProtoPaymentsGrid.css';
import payments from '../../data/payments.json';

function ProtoPaymentsGrid() {
	return (
		<section className="pgContainer">
			{/* Headers */}
			<div className="pgHeader">
				<div className="sender">Sender</div>
				<div className="recipient">Recipient</div>
				<div className="date">Date</div>
				<div className="amount">Amount</div>
				<div className="reason">Reason</div>
			</div>
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
		</section>
	);
}

export default ProtoPaymentsGrid;
