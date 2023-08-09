const containsOnlyLetters = (string) => {
  return /^[A-Za-z]+$/.test(string);
} ;

export const nameValidation = (name) => {
  if (typeof name === 'string') {
    if (name.length <= 0) {
      return {result: 'error', message: 'You didn\'t entered any value'};
    } else if (name.length > 0 && name.length > 50) {
      return {result: 'error', message: 'Please, write shorter name'};
    } else {
      if(containsOnlyLetters(name)) {
        return {result: 'success', message: 'Data is correct'};
      } else {
        return {result: 'error', message: 'Please enter a name without numbers'};
      }
    }
  } else {
    return {result: 'error', message: 'You entered uncorect data!'};
  }
};

export const emailValidation = (email) => {

};

export const passwordValidation = (password) => {

};