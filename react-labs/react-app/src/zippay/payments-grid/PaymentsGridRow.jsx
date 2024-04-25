import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentsGridRow({ payment, columns }) {
	let navigate = useNavigate();
	function handleUserLookUp(fieldName, fieldValue) {
		if (fieldName === 'payorId' || fieldName === 'payeeId') {
			navigate('../user-details/' + fieldValue);
		}
	}

	return (
		<div className="pgRow">
			{columns.map((column) => {
				return (
					<div
						key={column.field}
						onClick={() => {
							handleUserLookUp(column.field, payment[column.field]);
						}}
					>
						{payment[column.field]}
					</div>
				);
			})}
		</div>
	);
}

export default PaymentsGridRow;
