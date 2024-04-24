import React from 'react';
import PaymentsGridRow from './PaymentsGridRow';

function PaymentsGridBody({ columnMap, payments }) {
	// let colDict = {};
	// columnMap.forEach((element) => {
	// 	colDict[element.label] = colDict[element.visible];
	// });
	// return (
	// 	<>
	// 		{payments.map((payment) => (
	// 			<div
	// 				className="pgRow"
	// 				key={payment.id}
	// 			>
	// 				<div className="sender">{payment.payorId}</div>
	// 				<div className="recipient">{payment.payeeId}</div>
	// 				<div className="date">{payment.datePaid}</div>
	// 				<div className="amount">{payment.amount}</div>
	// 				<div className="reason">{payment.reason}</div>
	// 			</div>
	// 		))}
	// 	</>
	// );
	return (
		<>
			{payments.map((payment) => (
				<PaymentsGridRow
					columns={columnMap}
					payment={payment}
					key={payment.id}
				/>
			))}
		</>
	);
}

export default PaymentsGridBody;
