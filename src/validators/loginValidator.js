import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
  let errors = {};

  if (data.identifiers == null){
    errors.identifiers = "This field is required";
  }

  if (data.password == null){
    errors.password = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };

}
