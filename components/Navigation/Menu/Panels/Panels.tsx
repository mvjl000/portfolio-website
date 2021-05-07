import { StyledPanel } from './Panels.styles';

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const Panels: React.FC = () => {
  return (
    <>
      <StyledPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          top: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        isLeft={true}
      />
      <StyledPanel
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{
          height: [0, window.innerHeight, 0],
          bottom: [null, 0, 0],
        }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        isLeft={false}
      />
    </>
  );
};

export default Panels;
