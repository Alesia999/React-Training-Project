import React from "react";
import propTypes from "prop-types";
import Qualities from "./qualities";
import { Link } from "react-router-dom";
import BookMark from "./../common/bookmark";
import Table from "./../common/table/table";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={`users/${user._id}`}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <Qualities qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          delete
        </button>
      ),
    },
  };

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};

UserTable.propTypes = {
  users: propTypes.array.isRequired,
  onSort: propTypes.func.isRequired,
  selectedSort: propTypes.object.isRequired,
  onToggleBookMark: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
export default UserTable;
