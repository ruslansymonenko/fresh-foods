// const containsOnlyLetters = (string) => {
//   return /^[A-Za-z]+$/.test(string);
// } ;

// const checkIsEmail = (email) => {

// };

// export const nameValidation = (name) => {
//   if (typeof name === 'string') {
//     if (name.length <= 0) {
//       return {result: 'error', message: 'You didn\'t entered any value'};
//     } else if (name.length > 0 && name.length > 50) {
//       return {result: 'error', message: 'Please, write shorter name'};
//     } else {
//       if(containsOnlyLetters(name)) {
//         return {result: 'success', message: 'Data is correct'};
//       } else {
//         return {result: 'error', message: 'Please enter a name without numbers'};
//       }
//     }
//   } else {
//     return {result: 'error', message: 'Some error, please try later'};
//   }
// };

// export const emailValidation = (email) => {
//   if (typeof email === 'string') {
//     if(email.length <= 0) {
//       return {result: 'error', message: 'You didn\'t entered any value'};
//     } else {
      
//     }
//   } else {
//     return {result: 'error', message: 'Some error, please try later'};
//   }
// };

// export const passwordValidation = (password) => {

// };

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
        return {result: 'error', message: 'You didn\'t entered any value'};
      } else if (name.length > 0 && name.length > 50) {
        return {result: 'error', message: 'Please, write shorter name'};
      } else {
        if(this.containsOnlyLetters(name)) {
          return {result: 'success', message: 'Name is correct'};
        } else {
          return {result: 'error', message: 'Please enter a name without numbers'};
        }
      }
    } else {
      return {result: 'error', message: 'Some error, please try later'};
    }
  };

  emailValidation = (email) => {
    if (typeof email === 'string') {
      if(email.length <= 0) {
        return {result: 'error', message: 'You didn\'t entered any value'};
      } else {
        if(this.checkIsEmail(email)) {
          return {result: 'success', message: 'Email is correct'};
        } else {
          return {result: 'error', message: 'Please write correct email'};
        }
      }
    } else {
      return {result: 'error', message: 'Some error, please try later'};
    }
  };
}