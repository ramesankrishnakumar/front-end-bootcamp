import React from 'react';

function PaymentGridHeaderSortIndicator({ column, sortState }) {
	if (sortState.sortField !== column || sortState.sortDirection === '') {
		return '';
	}

	return <span>{sortState.sortDirection === 'asc' ? '⬆️' : '⬇️'}</span>;
}

export default PaymentGridHeaderSortIndicator;
