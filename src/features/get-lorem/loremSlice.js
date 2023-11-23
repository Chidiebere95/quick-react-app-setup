import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLorem = createAsyncThunk(
  'endpoint-name-in-home-folder',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error) {
      // return rejectWithValue(error);
      return rejectWithValue();
    }
  }
);

const loremSlice = createSlice({
  name: 'home-folder-name',
  initialState: {
    status: 'base',
    data: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLorem.pending, (state, { payload }) => {
      state.status = 'loading';
      state.data = [];
      state.error = false;
    });
    builder.addCase(getLorem.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload;
      state.error = false;
    });
    builder.addCase(getLorem.rejected, (state, { payload }) => {
      state.status = 'error';
      state.data = [];
      state.error = true;
    });
  },
});
// export const { increase } = loremSlice.actions;
export default loremSlice.reducer;
