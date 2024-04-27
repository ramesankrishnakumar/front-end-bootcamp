import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let url = 'http://localhost:8100/payments';

export const fetchPayments = createAsyncThunk(
	'payments/fetchPayments',
	async () => {
		const response = await fetch(url);
		if (response.ok) {
			const payments = await response.json();
			console.table(payments.slice(0, 2));
			return payments;
		}
	},
);

export const savePayments = createAsyncThunk(
	'payments/savePayments',
	async (value) => {
		const response = await fetch(url, {
			method: 'post',
			body: JSON.stringify({ payment: value }),
			headers: new Headers({
				contentType: 'application/json'
			})
		});
		if (response.ok) {
			const counter = await response.json();
			return counter.value;
		}
	},
);

const paymentsSlice = createSlice({
	name: 'payments',
	initialState: {
		payments: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchPayments.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPayments.fulfilled, (state, action) => {
				state.status = 'success';
				state.payments = action.payload;
				console.log(action);
			})
			.addCase(fetchPayments.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(savePayments.pending, (state) => {
				state.status = 'saving';
			})
			.addCase(savePayments.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(savePayments.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const paymentsSelector = (state) => state.payments.payments;
export default paymentsSlice.reducer;
