import React from "react";
import propTypes from "prop-types";

const RadioField = ({ options, name, value, onChange, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div
            key={option.name + "_" + option.value}
            className="form-check form-check-inline"
          >
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.name + "_" + option.value}
              checked={option.value === value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + "_" + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

RadioField.propTypes = {
  value: propTypes.string,
  label: propTypes.string,
  onChange: propTypes.func,
  name: propTypes.string,
  options: propTypes.oneOfType([propTypes.object, propTypes.array]),
};
export default RadioField;
