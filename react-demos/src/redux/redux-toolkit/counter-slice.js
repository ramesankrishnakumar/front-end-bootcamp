import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		status: null,
		error: null,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;