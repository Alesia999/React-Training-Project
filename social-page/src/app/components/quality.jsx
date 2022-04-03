import React from "react";
const Quality = ({ _id, color, name }) => {
  return (
    <p key={_id} className={"m-1 badge bg-" + color}>
      {name}
    </p>
  );
};

export default Quality;
