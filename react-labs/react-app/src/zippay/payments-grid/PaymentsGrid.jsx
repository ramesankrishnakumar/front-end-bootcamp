import React, { useEffect, useState } from 'react';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';

function PaymentsGrid() {
	let initialSortState = {
		sortField: '',
		sortDirection: '',
	};
	const [sortState, setSortState] = useState(initialSortState);
	const [payments, setPayments] = useState([]);

	useEffect(() => {
		async function getData() {
			let url = 'http://localhost:8006/payments';
			console.log('creating payments store');
			try {
				let response = await fetch(url);
				if (response.ok) {
					let results = await response.json();
					setPayments(results);
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			} catch (error) {
				console.error('async-await: Could not fetch data:', error);
			}
		}

		getData();
	}, []);

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

	return (
		<div
			className="pgContainer"
			style={{ '--column': columnCount }}
		>
			<PaymentsGridHeader
				columnMap={visibleColumnsMap}
				sortCallback={handleHeaderClick}
				sortState={sortState}
			/>
			<PaymentsGridBody
				columnMap={visibleColumnsMap}
				payments={payments}
				sortState={sortState}
			/>
		</div>
	);

	function handleHeaderClick(newSortColumn) {
		let newSortState = {};
		let newSortDirection = 'desc';
		if (sortState.sortField === newSortColumn) {
			if (sortState.sortDirection === '') {
				newSortDirection = 'asc';
			} else if (sortState.sortDirection === 'desc') {
				newSortDirection = '';
			}
			newSortState = {
				...initialSortState,
				sortField: sortState.sortField,
				sortDirection: newSortDirection,
			};
			setSortState(newSortState);
		} else {
			newSortDirection = 'asc';
			newSortState = {
				...initialSortState,
				sortField: newSortColumn,
				sortDirection: newSortDirection,
			};
			setSortState(newSortState);
		}
		// console.log(
		// 	`newSortDirection: ${newSortState.sortField} ${newSortState.sortDirection === '' ? 'empty' : newSortState.sortDirection}`,
		// );
	}
}

export default PaymentsGrid;
