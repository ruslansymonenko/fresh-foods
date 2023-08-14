import React, { useState, useEffect } from 'react';
import { UseSelector, useDispatch } from 'react-redux';

import DataInput from '../../components/DataInput/DataInput';
import Button from '../../components/Button/Button';

import contactFormValidation from '../../helpers/contactFormValidation';

import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameInputStatus, setNameInputStatus] = useState('');
  const [emailInputStatus, setEmailInputStatus] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const showInputError = (type) => {
    switch (type) {
      case 'name':
        setNameInputStatus('error');
        break
      case 'email': 
        setEmailInputStatus('error');
        break
      case 'all':
        setNameInputStatus('error');
        setEmailInputStatus('error');
        break;
      default:
        setNameInputStatus('');
        setEmailInputStatus('');
    }
  };


  const handleSubmit = () => {
    const formValidation = contactFormValidation(name, email);
    if(formValidation.validation === false) {
      showInputError(formValidation.errorField);
      console.log(formValidation);
    } else if (formValidation.validation === true) {
      console.log('submit form');
    }
  };

  const handleClearInputs = () => {
    setName('');
    setEmail('');
    setNameInputStatus('');
    setEmailInputStatus('');
  };


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
          status={nameInputStatus}
          value={name}
          onValueChange={handleNameChange}
        />
        <DataInput
          type={'email'}
          placeholderText={'Your Email'}
          status={emailInputStatus}
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