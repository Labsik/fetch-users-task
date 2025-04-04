import { User } from "@interfaces/user";
import css from "./UserDetailsItem.module.css";

type Props = {
  user: User;
};

export const UserDetailsItem = ({ user }: Props) => {
  return (
    <div className={css.card}>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};
