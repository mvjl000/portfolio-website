import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 1500px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
