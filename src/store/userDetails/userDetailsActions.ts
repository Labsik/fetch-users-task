import { User } from "@interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@services/axiosInstance";

export const fetchUserById = createAsyncThunk(
  "userDetails/fetchUserById",
  async (id: number) => {
    const response = await axiosInstance.get<User>(`/users/${id}`);

    return response.data;
  }
);
