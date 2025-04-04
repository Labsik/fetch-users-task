import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { fetchUserById } from "@store/userDetails/userDetailsActions";

export const useUserDetails = (id: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector((state: RootState) => state.userDetails);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return userDetails;
};
