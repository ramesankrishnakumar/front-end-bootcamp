import React from 'react';
import {
	updateSortField,
	sortDirectionSelector,
	sortFieldSelector,
} from './payments-grid-slice';
import PaymentGridHeaderSortIndicator from './PaymentGridHeaderSortIndicator';
import { useDispatch, useSelector } from 'react-redux';

function PaymentsGridHeader({ columnMap }) {
	// let headers = [];
	// columnMap.forEach((data) => {
	// 	headers.push(
	// 		<div
	// 			key={data.label}
	// 			onClick={() => sortCallback(data.field)}
	// 		>
	// 			{data.label}
	// 			&nbsp;
	// 			<PaymentGridHeaderSortIndicator
	// 				column={data.field}
	// 				sortState={sortState}
	// 			/>
	// 		</div>,
	// 	);
	// });
	let dispatcher = useDispatch();
	let reduxSortField = useSelector(sortFieldSelector);
	let reduxSortDirection = useSelector(sortDirectionSelector);
	return (
		<div className="pgHeader">
			{columnMap.map((data) => {
				return (
					<div
						key={data.label}
						onClick={() => dispatcher(updateSortField(data.field))}
					>
						{data.label}
						&nbsp;
						<PaymentGridHeaderSortIndicator
							column={data.field}
							sortState={{
								sortField: reduxSortField,
								sortDirection: reduxSortDirection,
							}}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default PaymentsGridHeader;
