import { useScreen } from '../../hooks/useScreen';

const Contact: React.FC = () => {
  const { isDesktopMode } = useScreen();

  return (
    <div>
      <h1>contact</h1>
      {isDesktopMode && (
        <>
          <iframe
            src="https://giphy.com/embed/A6aHBCFqlE0Rq"
            width="480"
            height="360"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/the-simpsons-swag-homer-simpson-A6aHBCFqlE0Rq">
              via GIPHY
            </a>
          </p>
        </>
      )}
    </div>
  );
};

export default Contact;
