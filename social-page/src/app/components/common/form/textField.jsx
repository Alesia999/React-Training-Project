import React, { useState } from "react";
import propTypes from "prop-types";

const TextField = ({ label, type, value, name, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          name={name}
          onChange={handleChange}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
  onChange: propTypes.func,
  error: propTypes.string,
};
export default TextField;
