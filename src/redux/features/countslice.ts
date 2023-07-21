import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },

  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = countSlice.actions;
export default countSlice.reducer;
