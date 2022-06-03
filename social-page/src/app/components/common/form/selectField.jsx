import React from "react";
import propTypes from "prop-types";

const SelectField = ({
  name,
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return "form-select" + (error ? " is-invalid" : "");
  };
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id,
        }))
      : options;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        value={value}
        name={name}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  name: propTypes.string,
  defaultOption: propTypes.string,
  label: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  error: propTypes.string,
  options: propTypes.oneOfType([propTypes.object, propTypes.array]),
};
export default SelectField;
