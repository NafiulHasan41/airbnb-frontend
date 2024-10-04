'use client'
import { createSlice } from '@reduxjs/toolkit';

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setListings: (state, action) => {
      state.listings = action.payload;
    },
  },
});

export const { setLoading, setListings } = listingsSlice.actions;

export default listingsSlice.reducer;
