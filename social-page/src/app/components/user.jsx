import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  handleDelete,
  onToggleBookmark,
}) => {
  return (
    <tr key={_id}>
      <th>{name}</th>
      <td>
        {qualities.map((quality) => (
          <Quality {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark
          status={bookmark}
          onToggleBookmark={onToggleBookmark}
          id={_id}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
