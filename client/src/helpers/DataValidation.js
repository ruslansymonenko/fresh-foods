export default class DataValidation {
  containsOnlyLetters = (string) => {
    return /^[A-Za-z]+$/.test(string);
  } ;

  checkIsEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return pattern.test(email);
  };

  nameValidation = (name) => {
    if (typeof name === 'string') {
      if (name.length <= 0) {
        return {result: false, message: 'You didn\'t entered any value'};
      } else if (name.length > 0 && name.length > 50) {
        return {result: false, message: 'Please, write shorter name'};
      } else {
        if(this.containsOnlyLetters(name)) {
          return {result: true, message: 'Name is correct'};
        } else {
          return {result: false, message: 'Please enter a name without numbers'};
        }
      }
    } else {
      return {result: false, message: 'Some error, please try later'};
    }
  };

  emailValidation = (email) => {
    if (typeof email === 'string') {
      if(email.length <= 0) {
        return {result: false, message: 'You didn\'t entered any value'};
      } else {
        if(this.checkIsEmail(email)) {
          return {result: true, message: 'Email is correct'};
        } else {
          return {result: false, message: 'Please write correct email'};
        }
      }
    } else {
      return {result: false, message: 'Some error, please try later'};
    }
  };
}