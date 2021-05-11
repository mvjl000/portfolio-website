import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  h1 {
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 62px;
    }
  }
  h2 {
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
  a {
    position: absolute;
    top: 70%;
    padding: 2px 8px;
    text-decoration: underline;
    background-color: #111;
    color: #fff;
    font-size: 18px;
    @media (min-width: 1024px) {
      font-size: 22px;
    }
  }
`;

const NotFoundPage: NextPage = () => {
  return (
    <Wrapper>
      <h1>404 :(</h1>
      <h2>Page Not found</h2>
      <Link href="/">Go to Home Page</Link>
    </Wrapper>
  );
};

export default NotFoundPage;
