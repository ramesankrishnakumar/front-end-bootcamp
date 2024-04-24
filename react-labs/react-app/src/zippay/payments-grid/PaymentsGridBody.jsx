import React from 'react';
import PaymentsGridRow from './PaymentsGridRow';
import { orderBy } from 'lodash';

function PaymentsGridBody({ columnMap, payments, sortState }) {
	// console.log(`sortState: ${JSON.stringify(sortState, null, 4)}`);
	let sortedPayments =
		sortState.sortDirection !== ''
			? orderBy(payments, sortState.sortField, sortState.sortDirection)
			: payments;
	// console.log(sortedPayments.slice(0, 5));
	return (
		<div className="pgBody">
			{sortedPayments.map((payment) => (
				<PaymentsGridRow
					columns={columnMap}
					payment={payment}
					key={payment.id}
				/>
			))}
		</div>
	);
}

export default PaymentsGridBody;
