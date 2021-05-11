import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../../hooks/useTranslation';
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  Button,
} from './ContactForm.styles';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { translate } = useTranslation();

  const handleFieldChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message) return;
    try {
      await axios.post('/api/contact', { email, message });
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledInput>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleFieldChange}
        />
      </StyledInput>
      <StyledTextArea>
        <label htmlFor="message">{translate('contactFormMessage')}:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleFieldChange}
        ></textarea>
      </StyledTextArea>
      <Button type="submit">
        {translate('contactFormButton')} <img src="/images/plane.png" />
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
