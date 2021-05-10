import styled from 'styled-components';

interface LogoProps {
  pathname: string;
}

const Wrapper = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    font-family: 'Quicksand', sans-serif;
    color: ${({ pathname }) => (pathname === 'tech' ? '#111' : '#fff')};
    font-weight: 600;
    font-size: 18px;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

const Logo: React.FC<LogoProps> = ({ pathname }) => (
  <Wrapper pathname={pathname}>
    <p>Miłosz</p>
    <p>Piskadło</p>
  </Wrapper>
);

export default Logo;
