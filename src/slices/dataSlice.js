import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGalaxy } from "../api";
import { setLoading } from "./uiSlice";
const initialState = {
  galaxies: [],
};
export const fetchGalaxiesWithDetails = createAsyncThunk(
  "data/fetchGalaxiesWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const galaxiesRes = await getGalaxy();
   
    dispatch(setGalaxies(galaxiesRes));
    dispatch(setLoading(false));
  }
);
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setGalaxies: (state, action) => {
      state.galaxies = action.payload;
    },


  },
});
export const {  setGalaxies } = dataSlice.actions;
export default dataSlice.reducer;