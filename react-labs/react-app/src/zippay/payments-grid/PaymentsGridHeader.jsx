import React from 'react';
import PaymentGridHeaderSortIndicator from './PaymentGridHeaderSortIndicator';

function PaymentsGridHeader({ columnMap, sortCallback, sortState }) {
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
	return (
		<div className="pgHeader">
			{columnMap.map((data) => {
				return (
					<div
						key={data.label}
						onClick={() => sortCallback(data.field)}
					>
						{data.label}
						&nbsp;
						<PaymentGridHeaderSortIndicator
							column={data.field}
							sortState={sortState}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default PaymentsGridHeader;
