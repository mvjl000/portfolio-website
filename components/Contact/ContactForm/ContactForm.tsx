import Image from 'next/image';
import { useTranslation } from '../../../hooks/useTranslation';
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  Button,
} from './ContactForm.styles';

const ContactForm: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <StyledForm>
      <StyledInput>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
      </StyledInput>
      <StyledTextArea>
        <label htmlFor="message">{translate('contactFormMessage')}:</label>
        <textarea id="message"></textarea>
      </StyledTextArea>
      <Button type="submit">
        {translate('contactFormButton')}{' '}
        <Image src="/images/plane.png" width={32} height={32} />
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
