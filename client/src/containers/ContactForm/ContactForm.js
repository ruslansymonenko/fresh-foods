import React, { useState, useEffect } from 'react';

import DataInput from '../../components/DataInput/DataInput';
import Button from '../../components/Button/Button';

// import {nameValidation} from '../../helpers/dataValidation';
import DataValidation from '../../helpers/dataValidation';

import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameCorrect, setIsNameCorrect] = useState('');
  const [isEmailCorrect, setIsEmailCorrect] = useState('');
  const [isFormVaid, setIsFormValid] = useState({
    status: false,
    message: '',
  });

  const validation = new DataValidation();

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

    const updateFormStatus = (newStatus) => {
    setIsFormValid((prevFormValidity) => ({
      ...prevFormValidity,
      status: newStatus,
    }));
  };

  const updateFormMessage = (newMessage) => {
    setIsFormValid((prevFormValidity) => ({
      ...prevFormValidity,
      message: newMessage,
    }));
  };

  const checkValidationData = (type, value, func) => {
    let checkingValue;

    if (type === 'name') {
      checkingValue = validation.nameValidation(value);
    } else if (type === 'email') {
      checkingValue = validation.emailValidation(value);
    } else {
      return;
    }

    if (checkingValue.result === 'error') {
      func(checkingValue.result);
    } else if (checkingValue.result === 'success') {
      func(checkingValue.result);
    }
  };

  // const checkValidationName = () => {
  //   const checkName = validation.nameValidation(name);
  //   if (checkName.result === 'error') {
  //     setIsNameCorrect(checkName.result);
  //   } else if (checkName.result === 'success') {
  //     setIsNameCorrect(checkName.result);
  //   }
  // };

  // const checkValidationEmail = () => {
  //   const checkEmail = validation.emailValidation(email);
  //   if (checkEmail.result === 'error') {
  //     setIsEmailCorrect(checkEmail.result);
  //   } else if (checkEmail.result === 'success') {
  //     setIsEmailCorrect(checkEmail.result);
  //   }
  // };

  const handleSubmit = () => {

  };

  const handleClearInputs = () => {
    setName('');
    setEmail('');
  };

  useEffect(() => {
    if (name.length > 0) {
      checkValidationData('name', name, setIsNameCorrect);
    } else {
      setIsNameCorrect('');
    }
  }, [name]);

  useEffect(() => {
    if (email.length > 0) {
      checkValidationData('email', email, setIsEmailCorrect);
      // checkValidationEmail();
    } else {
      setIsEmailCorrect('');
    }
  }, [email]);

  return (
    <form 
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <h2 className="contact-form__title">
        Conctact us
      </h2>
      <div className="contact-form__inputs">
        <DataInput
          type={'text'}
          placeholderText={'Your name'}
          status={isNameCorrect}
          value={name}
          onValueChange={handleNameChange}
        />
        <DataInput
          type={'email'}
          placeholderText={'Your Email'}
          status={isEmailCorrect}
          value={email}
          onValueChange={handleEmailChange}
        />
      </div>
      <div className="contact-form__btns">
        <Button
          text={'Submit'}
          type={'submit'}
          action={handleSubmit}
          classes={'contact-form__btns-submit'}
        />
        <Button
          text={'Cancel'}
          action={handleClearInputs}
          classes={'contact-form__btns-cancel'}
        />
      </div>
    </form>
  );
};

export default ContactForm;