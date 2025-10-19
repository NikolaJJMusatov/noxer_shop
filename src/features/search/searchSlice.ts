import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  category: number | null;
}

const initialState: SearchState = {
  query: "",
  category: null,
};


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      if (action.payload) state.category = null;
    },
    setCategory(state, action: PayloadAction<number | null>) {
      state.category = action.payload;
      if (action.payload) state.query = "";
    },
  },
});

export const { setSearchQuery, setCategory } = searchSlice.actions;
export default searchSlice.reducer;