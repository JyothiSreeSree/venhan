import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'e1-2', source: '1', target: '2', type: 'default' },
];

export const edgesSlice = createSlice({
  name: 'edges',
  initialState,
  reducers: {
    addEdge: (state, action) => {
      state.push(action.payload);
    },
    removeEdge: (state, action) => {
      return state.filter((edge) => edge.id !== action.payload);
    },
  },
});

export const { addEdge, removeEdge } = edgesSlice.actions;
export default edgesSlice.reducer;
