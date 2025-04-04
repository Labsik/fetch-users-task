import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { fetchUsers } from "@store/users/usersActions";

export const useFetchUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usersState = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return usersState;
};
