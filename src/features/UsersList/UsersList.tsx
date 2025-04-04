import { useState } from "react";
import useDebounceSearch from "@hooks/useDebounceSearch";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { UserItem } from "@components/UserItem/UserItem";
import { Input } from "@components/ui/Input/Input";
import { Button } from "@components/ui/Button/Button";

export const UsersList = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounceSearch(search, 500, 3);

  const { users, loading, error } = useFetchUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const handleReset = () => {
    setSearch("");
  };

  return (
    <div>
      <h1>Users</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && <Input value={search} onChange={setSearch} />}

      {filteredUsers.length === 0 && !loading && (
        <div>
          <p>No users found.</p>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      )}

      <div>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
