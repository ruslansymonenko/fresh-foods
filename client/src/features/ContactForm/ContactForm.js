import React from 'react'

const ContactForm = () => {
  const handleSubmit = () => {
    console.log('form submit');
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="contact-form"
    >
      ContactForm
    </form>
  );
};

export default ContactForm;