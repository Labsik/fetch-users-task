import { User } from "@interfaces/user";

type Props = {
  user: User;
};

export const UserDetailsItem = ({ user }: Props) => {
  return (
    <div>
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
