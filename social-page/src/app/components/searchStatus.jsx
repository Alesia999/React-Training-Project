import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    if (number > 1) return "people are";
    return "person is";
  };
  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length + " " + renderPhrase(length)} ready to hang out today`
          : "No one is ready to hang out today"}
      </span>
    </h2>
  );
};
SearchStatus.propTypes = {
  length: PropTypes.number
};

export default SearchStatus;
