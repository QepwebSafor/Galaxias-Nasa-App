import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGalaxies, getGalaxyDetails } from '../api';
import { setLoading } from './uiSlice';
const initialState = {
  galaxies: [],
};
export const fetchGalaxiesWithDetails = createAsyncThunk(
  'data/fetchGalaxiesWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const galaxiesRes = await getGalaxies();
    const galaxysDetailed = await Promise.all(
      galaxiesRes.map((galaxy) => getGalaxyDetails(galaxy))
    );
    dispatch(setGalaxies(galaxysDetailed));
    dispatch(setGalaxies(galaxiesRes));
    dispatch(setLoading(false));
  }
);
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setGalaxies: (state, action) => {
      state.galaxies = action.payload;
    },
  },
});
export const { setGalaxies } = dataSlice.actions;
export default dataSlice.reducer;
