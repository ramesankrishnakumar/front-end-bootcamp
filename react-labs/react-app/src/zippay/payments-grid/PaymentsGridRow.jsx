import React from 'react';

function PaymentsGridRow({ payment, columns }) {
	return (
		<div className="pgRow">
			{columns.map((column) => {
				return <div key={column.field}>{payment[column.field]}</div>;
			})}
		</div>
	);
}

export default PaymentsGridRow;
