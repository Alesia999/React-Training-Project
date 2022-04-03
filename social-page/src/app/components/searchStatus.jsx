import React from "react";

const SearchStatus = ({length}) => {
  const renderPhrase = (number) => {
    return number >= 2
      ? `${number} Users are`
      : number === 1
      ? "1 User is"
      : "No one is";
  };
  return (
    <h2
      className={
        "fs-3 d-inline-flex p-1 text-white bg-primary " +
        (length ? "" : "bg-danger")
      }
    >
      {renderPhrase(length)} ready to hang out today
    </h2>
  );
};

export default SearchStatus;
