import React from "react";
import propTypes from "prop-types";
import Bookmark from "./bookmark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
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
