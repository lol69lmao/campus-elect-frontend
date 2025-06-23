import User, { UserType } from "./User";

async function UsersList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: UserType[] = await res.json();

  return (
    <div className="grid grid-cols-2 gap-2 max-w-">
      {users.map((user) => {
        return (
          <User
            key={user.username}
            id={user.id}
            email={user.email}
            name={user.name}
            username={user.username}
            website={user.website}
          />
        );
      })}
    </div>
  );
}

export default UsersList;
