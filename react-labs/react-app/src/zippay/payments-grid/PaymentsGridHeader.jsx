import React from 'react';

function PaymentsGridHeader({ columnMap }) {
	let visibleColumnsMap = columnMap.filter((data) => data.visible);
	let visibleColumnsCount = visibleColumnsMap.length;
	return (
		<div
			className="pgHeader"
			style={{ '--column': visibleColumnsCount }}
		>
			{visibleColumnsMap.map((data) => (
				<div key={data.label}>{data.label}</div>
			))}
		</div>
	);
}

export default PaymentsGridHeader;
