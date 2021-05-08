import { StyledForm, StyledInput, StyledTextArea } from './ContactForm.styles';

const ContactForm: React.FC = () => {
  return (
    <StyledForm>
      <StyledInput>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
      </StyledInput>
      <StyledTextArea>
        <label htmlFor="message">Message:</label>
        <textarea id="message"></textarea>
      </StyledTextArea>
    </StyledForm>
  );
};

export default ContactForm;
