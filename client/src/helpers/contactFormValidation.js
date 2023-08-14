import DataValidation from './dataValidation';

const contactFormValidation = (name, email) => {
  const validationResult = {
    validation: false,
    message: '',
    errorField: '',
  };

  const validator = new DataValidation();

  let result;

  let checkValidation = false;
  let errorMessage = '';
  let error = '';

  let errorsCounter = 0;

  if(!name) {
    errorMessage = 'Name is required';
    error = 'name';
    errorsCounter++;
  }

    if(!email) {
    errorMessage = 'Email is required';
    error = 'email';
    errorsCounter++;
  }

  if (name && email) {
    let nameCheck = validator.nameValidation(name);
    let emailCheck = validator.emailValidation(email);

    if(!nameCheck.result) {
      errorMessage = nameCheck.message;
      error = 'name';
      errorsCounter++;
    }

    if(!emailCheck.result) {
      errorMessage = emailCheck.message;
      error = 'email';
      errorsCounter++;
    }

    if (nameCheck.result && emailCheck.result) {
      errorsCounter = 0;
    }
  }

  if (errorsCounter === 0) {
    return result = {
      ...validationResult,
      validation: true,
      message: 'Your data is correct',
      errorField: '',
    };
  } else if (errorsCounter === 1) {
    return result = {
      ...validationResult,
      validation: checkValidation,
      message: errorMessage,
      errorField: error,
    };
  } else if (errorsCounter > 1) {
    return result = {
      ...validationResult,
      validation: false,
      message: 'Please, put correct data',
      errorField: 'all',
    };
  }
};

export default contactFormValidation;