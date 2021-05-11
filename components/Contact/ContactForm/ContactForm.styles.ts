import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  height: 370px;
  z-index: 1;
  border: 1px solid #eee;
  @media (min-width: 1024px) {
    height: 320px;
    margin-right: 20px;
    border-color: #444;
  }
  @media (min-width: 1500px) {
    height: 370px;
    margin: 0 20px 20px 0;
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
  @media (min-width: 1024px) {
    height: 150px;
  }
  @media (min-width: 1500px) {
    height: 200px;
  }
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

export const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
  background-color: transparent;
  border: none;
  font-size: 17px;
  cursor: pointer;
  font-weight: 500;
  @media (min-width: 1024px) {
    color: #fff;
  }
`;
