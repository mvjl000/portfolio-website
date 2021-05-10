import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: 40px;
  width: 80%;
  max-width: 400px;
  background-color: #111;
  @media (min-width: 1024px) {
    height: 400px;
    overflow-y: scroll;
  }
`;

export const ListTitle = styled.h2`
  margin: 35px 0 10px;
  padding: 0 50px;
  color: #fff;
  font-size: 30px;
  text-align: left;
`;

export const List = styled.ul`
  margin: 30px 0;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  li {
    font-size: 18px;
    margin: 5px 0;
    color: #fff;
  }
`;
