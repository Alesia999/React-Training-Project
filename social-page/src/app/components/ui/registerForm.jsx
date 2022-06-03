import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import API from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";



const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
    license: false,
  });
  const [qualities, setQualities] = useState({});
  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState([]);
  useEffect(() => {
    API.professions.fetchAll().then((response) => setProfessions(response));
    API.qualities.fetchAll().then((response) => setQualities(response));
  }, []);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

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
    profession: {
      isRequired: { message: "Profession field can not be blank!" },
    },
    license: {
      isRequired: { message: "Please confirm license agreement" },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
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
      <SelectField
        label="Please choose your profession"
        name="professions"
        onChange={handleChange}
        options={professions}
        defaultOption="Choose..."
        value={data.profession}
        error={errors.profession}
      />
      <RadioField
        onChange={handleChange}
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
          { name: "Other", value: "other" },
        ]}
        name="sex"
        value={data.sex}
        label="Please select your gender"
      />
      <MultiSelectField
        defaultValue = {data.qualities}
        options={qualities}
        onChange={handleChange}
        name="qualities"
        label="Please select your qualities from the list"
      />
      <CheckBoxField
        value={data.license}
        onChange={handleChange}
        name="license"
        error={errors.license}
      >
        Confirm <a>license agreement</a>
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

export default RegisterForm;
