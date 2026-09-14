function UserItem({
  user,
  selectedUser,
  onSelectUser,
}) {
  const isSelected =
    selectedUser?.id === user.id;

  return (
    <div
      className={`user-item ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => onSelectUser(user)}
    >
      <div className="avatar">
        {user.avatar}
      </div>

      <div className="user-info">
        <div className="user-name">
          <strong>{user.name}</strong>

          {user.online && (
            <span className="online-dot"></span>
          )}
        </div>

        <span className="last-message">
          Tap to chat
        </span>
      </div>

      {user.unread > 0 && (
        <span className="unread">
          {user.unread}
        </span>
      )}
    </div>
  );
}

export default UserItem;