import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    font-family: 'Quicksand', sans-serif;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`;

const Logo: React.FC = () => (
  <Wrapper>
    <p>Miłosz</p>
    <p>Piskadło</p>
  </Wrapper>
);

export default Logo;
