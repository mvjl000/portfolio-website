import Image from 'next/image';
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  Button,
} from './ContactForm.styles';

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
      <Button type="submit">
        Send <Image src="/images/plane.png" width={32} height={32} />
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
