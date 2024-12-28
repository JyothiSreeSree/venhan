import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', type: 'default', position: { x: 100, y: 100 }, data: { label: 'Node 1' } },
];

const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    addNode: (state, action) => {
      state.push(action.payload);
    },
    deleteNode: (state, action) => {
      return state.filter((node) => node.id !== action.payload);
    },
    updateNode: (state, action) => {
      const index = state.findIndex((node) => node.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addNode, deleteNode, updateNode } = nodesSlice.actions;
export default nodesSlice.reducer;
