import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLoremAboutPage = createAsyncThunk(
  'endpoint-name-in-about-folder',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

const loremABoutPageSlice = createSlice({
  name: 'about-folder-name',
  initialState: {
    status: 'base',
    data: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoremAboutPage.pending, (state, { payload }) => {
      state.status = 'loading';
      state.data = [];
      state.error = false;
    });
    builder.addCase(getLoremAboutPage.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.data = payload;
      state.error = false;
    });
    builder.addCase(getLoremAboutPage.rejected, (state, { payload }) => {
      state.status = 'error';
      state.data = [];
      state.error = true;
    });
  },
});
export default loremABoutPageSlice.reducer;
