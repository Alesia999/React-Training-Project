import React from "react";
import propTypes from "prop-types";
import Quality from "./qualitie";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Quality {...qual} key={qual._id} />
      ))}
    </>
  );
};

QualitiesList.propTypes = {
  qualities: propTypes.array.isRequired,
};
export default QualitiesList;
