import React from "react";
import propTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  );
};

Table.propTypes = {
  onSort: propTypes.func,
  selectedSort: propTypes.object,
  columns: propTypes.object,
  data: propTypes.array,
  children: propTypes.array,
};
export default Table;
