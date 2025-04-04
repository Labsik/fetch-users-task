import { User } from "@interfaces/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@services/axiosInstance";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
});
