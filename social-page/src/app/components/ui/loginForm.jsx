import React, { useState, useEffect } from "react";
// import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import * as yup from "yup";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Password can not be blank!")
      .matches(
        /(?=.*[A-Z])/,
        "Password must contain at least 1 capital letter."
      )
      .matches(/(?=.*[0-9])/, "Password must contain at least 1 digit.")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must contain at least 1 special character."
      )
      .matches(/(?=.{8,})/, "Password must contain at least 8 symbols."),
    email: yup
      .string()
      .required("Email can not be blank!")
      .email("Email is not correct."),
  });

  const validatorConfig = {
    email: {
      isRequired: { message: "Email can not be blank!" },
      isEmail: { message: "Email is not correct." },
    },
    password: {
      isRequired: { message: "Password can not be blank!" },
      isCapitalSymbol: {
        message: "Password must include at least 1 capital letter.",
      },
      containsDigit: { message: "Password must include at least 1 digit." },
      min: { message: "Password must contain at least 8 symbols.", value: 8 },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    // const errors = validator(data, validatorConfig);
    validateScheme
      .validate(data)
      .then(setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    // setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={data.email}
        name="email"
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        value={data.password}
        name="password"
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Stay logged in
      </CheckBoxField>
      <button
        type="submit"
        disabled={!isValid}
        className="btn btn-primary w-100 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
