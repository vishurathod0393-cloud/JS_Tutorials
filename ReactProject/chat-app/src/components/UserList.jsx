import UserItem from "./UserItem";

function UserList({
  users,
  selectedUser,
  onSelectUser,
}) {
  if (users.length === 0) {
    return (
      <p className="no-users">
        No users found
      </p>
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          selectedUser={selectedUser}
          onSelectUser={onSelectUser}
        />
      ))}
    </div>
  );
}

export default UserList;