export class DataValidation {
  constructor (value) {
    this.value = value;
    this.validationResult = ['success', 'error'];
  }

  nameValidation () {
    if(typeof this.value === 'string') {
      console.log('yes');
    } 
  }
}