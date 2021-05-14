import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from '../../../hooks/useTranslation';
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  Button,
} from './ContactForm.styles';
import Loader from '../../shared/Loader';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { translate } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 3500);
  }, [isSuccess]);

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
    setIsLoading(true);
    try {
      await axios.post('/api/contact', { email, message });
      setIsLoading(false);
      setEmail('');
      setMessage('');
      setIsSuccess(true);
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
        {isLoading && <Loader />}
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleFieldChange}
        ></textarea>
      </StyledTextArea>
      <Button type="submit" isSuccess={isSuccess}>
        {translate('contactFormButton')} <img src="/images/plane.png" />
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
