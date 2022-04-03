import React from "react";

const Bookmark = ({ status, onToggleBookmark, id }) => {
  return (
    <button onClick={() => onToggleBookmark(id)}>
      <i className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i>
    </button>
  );
};

export default Bookmark;
