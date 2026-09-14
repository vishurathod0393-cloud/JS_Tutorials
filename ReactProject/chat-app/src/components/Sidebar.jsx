import UserList from "./UserList";

function Sidebar({
  users,
  selectedUser,
  onSelectUser,
  search,
  setSearch,
}) {
  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2>💬 Chats</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <UserList
        users={filteredUsers}
        selectedUser={selectedUser}
        onSelectUser={onSelectUser}
      />

    </aside>
  );
}

export default Sidebar;