import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Button/Button";
import { useUserDetails } from "./hooks/useUserDetails";
import { UserDetailsItem } from "@components/UserDetailsItem/UserDetailsItem";

export const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);

  const { user, loading, error } = useUserDetails(numericId);

  if (loading) return <p>Loading...</p>;
  if ((error && error === "Request failed with status code 404") || !user)
    return (
      <p>
        User not found. <span onClick={() => navigate("/users")}>Go back</span>
      </p>
    );

  return (
    <div>
      <Button onClick={() => navigate("/users")}>← Back</Button>
      <UserDetailsItem user={user} />
    </div>
  );
};
