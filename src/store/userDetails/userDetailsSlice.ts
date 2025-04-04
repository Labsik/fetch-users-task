import { User } from "@interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserById } from "./userDetailsActions";

interface UserDetailsState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserDetailsState = {
  user: null,
  loading: false,
  error: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.user = action.payload;
        }
      )
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

export default userDetailsSlice.reducer;
