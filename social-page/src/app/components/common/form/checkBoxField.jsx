import React from "react";
import propTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  const getInputClasses = () => {
    return "form-check-input" + (error ? " is-invalid" : "");
  };
  return (
    <div className="form-check mb-4">
      <input
        className={getInputClasses()}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label " htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback ">{error}</div>}
    </div>
  );
};

CheckBoxField.propTypes = {
  value: propTypes.bool,
  onChange: propTypes.func,
  name: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]),
  error: propTypes.string,
};
export default CheckBoxField;
