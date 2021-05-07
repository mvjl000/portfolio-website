import styled from 'styled-components';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px 25px;
`;

export const IconsWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 150px;
  @media (min-width: 1024px) {
    flex-direction: row;
    height: auto;
    width: 200px;
  }
  svg {
    color: white;
    transform: scale(1.4);
    cursor: pointer;
    @media (min-width: 1024px) {
      transform: scale(1.5) translateY(10px);
    }
  }
`;
