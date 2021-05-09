import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  height: 350px;
  z-index: 1;
  border: 1px solid #eee;
  @media (min-width: 1024px) {
    margin: 40px 20px 20px 0;
    border-color: #444;
  }
`;

export const StyledInput = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  label {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    @media (min-width: 1024px) {
      color: #fff;
    }
  }
  input {
    padding: 0 10px;
    font-size: 18px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    @media (min-width: 1024px) {
      color: #fff;
    }
  }

  &::after {
    position: absolute;
    bottom: -50%;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #000;
    @media (min-width: 1024px) {
      background-color: #fff;
    }
  }
`;

export const StyledTextArea = styled.div`
  margin-top: 40px;
  position: relative;
  width: 100%;
  height: 200px;
  label {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    @media (min-width: 1024px) {
      color: #fff;
    }
  }
  textarea {
    padding: 0 10px;
    font-size: 18px;
    width: 100%;
    height: 90%;
    border: none;
    background-color: transparent;
    resize: none;
    @media (min-width: 1024px) {
      color: #fff;
    }
  }

  &::after {
    position: absolute;
    bottom: -20px;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #000;
    @media (min-width: 1024px) {
      background-color: #fff;
    }
  }
`;
