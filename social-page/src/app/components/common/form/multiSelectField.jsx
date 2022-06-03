import React from "react";
import propTypes from "prop-types";
import Select from "react-select";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  const handleChange = (value) => {
    onChange({ name: name, value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        className="basic-multi-select"
        classNamePrefix="select"
        options={optionsArray}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  onChange: propTypes.func,
  options: propTypes.oneOfType([propTypes.object, propTypes.array]),
  name: propTypes.string,
  label: propTypes.string,
  defaultValue: propTypes.array,
};
export default MultiSelectField;
