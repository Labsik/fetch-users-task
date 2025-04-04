import { Button } from "@components/ui/Button/Button";
import { User } from "@interfaces/user";
import { useNavigate } from "react-router-dom";
import css from "./UserItem.module.css";

type Props = {
  user: User;
};

export const UserItem = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={css.card}>
      <p>
        <strong>{user.name}</strong>
      </p>
      <p>{user.email}</p>
      <Button onClick={() => navigate(`/users/${user.id}`)}>Details</Button>
    </div>
  );
};
