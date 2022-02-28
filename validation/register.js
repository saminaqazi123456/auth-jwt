const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if(!Validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.name = 'Name must be between 2 to 50 chars';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name entry is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email entry is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  let re = /^[a-z0-9]+$/i;
  if ((!Validator.isLength(data.password, { min: 12, max: 30 })) || (!re.test(data.password))) {
    errors.password = "Passphrase must be at least 12 characters (alphanumeric & no spaces)";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Passphrase entry is required";
  }
 
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Passphrase entry is required";
  } else {
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passphrase and Confirm Passphrase entries must match";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
