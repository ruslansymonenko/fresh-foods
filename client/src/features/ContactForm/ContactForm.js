import React, { useState, useEffect } from 'react';

import DataInput from '../../components/DataInput/DataInput';
import Button from '../../components/Button/Button';

import './ContactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handleSubmit = () => {
    console.log('form submit');
    handleClearInputs();
  };

  const handleClearInputs = () => {
    setName('');
    setEmail('');
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
          status={''}
          value={name}
          onValueChange={handleNameChange}
        />
        <DataInput
          type={'email'}
          placeholderText={'Your Email'}
          status={''}
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