import { configureStore } from '@reduxjs/toolkit';
import sortStateReducer from './payments-grid/SortStateSlice';
import paymentsReducer, { fetchPayments } from './payments-grid/PaymentsSlice';


export const store = configureStore({
	reducer: {
		sortState: sortStateReducer,
		payments: paymentsReducer
	},
});

store.dispatch(fetchPayments());

