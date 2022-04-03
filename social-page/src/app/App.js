import React, { useState } from "react";
import Users from "./components/users.jsx";
import API from "./api/index.js";
import SearchStatus from "./components/searchStatus";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId);
    setUsers(newUsers);
  };

  const handleToggleBookmark = (userId) => {
    const newUsers = users.map((user) => {
      if (userId === user._id) {
        return { ...user, bookmark: !user.bookmark };
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        handleDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
      />
    </>
  );
};

export default App;
