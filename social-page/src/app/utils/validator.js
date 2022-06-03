export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValid;

    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValid = data;
        } else {
          statusValid = data.trim() !== "";
        }
        break;
      }

      case "isEmail":
        const emailRegExp = /^\S+@\S+\.\S+$/g;

        statusValid = emailRegExp.test(data);
        break;

      case "isCapitalSymbol":
        const capitalRegExp = /[A-Z]+/g;

        statusValid = capitalRegExp.test(data);
        break;

      case "containsDigit":
        const digitRegExp = /\d+/g;

        statusValid = digitRegExp.test(data);
        break;
      case "min":
        statusValid = data.length >= config.value;
        break;

      default:
        break;
    }
    if (!statusValid) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
