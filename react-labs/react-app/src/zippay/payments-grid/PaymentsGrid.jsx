import React, { useEffect, useState } from 'react';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	sortDirectionSelector,
	sortFieldSelector,
	updateSortField,
} from './SortStateSlice';
import { paymentsSelector } from './PaymentsSlice';

function PaymentsGrid() {
	let dispatch = useDispatch();
	let reduxSortField = useSelector(sortFieldSelector);
	let reduxSortDirection = useSelector(sortDirectionSelector);
	let reduxPayments = useSelector(paymentsSelector);
	// const [payments, setPayments] = useState([]);

	// useEffect(() => {
	// 	async function getData() {
	// 		let url = 'http://localhost:8100/payments';
	// 		console.log('creating payments store');
	// 		try {
	// 			let response = await fetch(url);
	// 			if (response.ok) {
	// 				let results = await response.json();
	// 				setPayments(results);
	// 			} else {
	// 				throw new Error(`Bad response: ${response.status}`);
	// 			}
	// 		} catch (error) {
	// 			console.error('async-await: Could not fetch data:', error);
	// 		}
	// 	}

	// 	getData();
	// }, []);

	let columnMap = [
		{ label: 'ID', field: 'id', visible: false },
		{ label: 'Sender', field: 'payorId', visible: true },
		{ label: 'Recipient', field: 'payeeId', visible: true },
		{ label: 'Date', field: 'datePaid', visible: false },
		{ label: 'Amount', field: 'amount', visible: true },
		{ label: 'Reason', field: 'reason', visible: true },
	];

	let visibleColumnsMap = columnMap.filter((data) => data.visible);
	let columnCount = visibleColumnsMap.length;
	console.log(
		`redux sortfield: ${reduxSortField} sortDirection: ${reduxSortDirection}`,
	);

	return (
		<div
			className="pgContainer"
			style={{ '--column': columnCount }}
		>
			<PaymentsGridHeader columnMap={visibleColumnsMap} />
			<PaymentsGridBody
				columnMap={visibleColumnsMap}
				payments={reduxPayments}
				sortState={{
					sortField: reduxSortField,
					sortDirection: reduxSortDirection,
				}}
			/>
		</div>
	);
}

export default PaymentsGrid;
