import { createSlice } from '@reduxjs/toolkit';

const gridSlice = createSlice({
	name: 'sortState',
	initialState: {
		sortField: '',
		sortDirection: '',
	},
	reducers: {
		// Implement what we do in payments grid here
		updateSortField: (state, action) => {
			let field = action.payload;
			let nextSortDirection = 'asc';
			if (field === state.sortField && state.sortDirection === 'asc') {
				nextSortDirection = 'desc';
			} else if (field === state.sortField && state.sortDirection === 'desc') {
				nextSortDirection = '';
			}

			state.sortField = field;
			state.sortDirection = nextSortDirection;
		},
	},
});
export const sortFieldSelector = (state) => state.sortState.sortField;
export const sortDirectionSelector = (state) => state.sortState.sortDirection;
export const { updateSortField } = gridSlice.actions;
export default gridSlice.reducer;
