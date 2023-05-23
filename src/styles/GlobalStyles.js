import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';
import '../assets/styles/projectStyles.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    font-size: 62.5%;
    font-family: 'Ubuntu', sans-serif;
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
  }

  body {
    position: relative;
  }

  button {
    cursor: pointer;
    border: none;
    color: ${colors.secondaryColor};
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: ${colors.secondaryColor};
    font-size: 1.6rem;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: ${colors.secondaryColor};
    font-size: 1.6rem;
  }
`;

export const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;

  @media (max-width: 420px) {
    padding: 5px;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  margin: auto;
`;

export const MainTittle = styled.h1`
  font-size: 5.3rem;
  color: ${colors.primaryColor};
`;

export const SpecialParagraph = styled.p`
  font-size: 2.7rem;
  color: ${colors.primaryColor};
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  label {
    color: ${colors.primaryColor};
    font-size: 2.7rem;
    padding: 0.7rem;
    margin: auto;
  }
  input {
    display: block;
    padding: 1rem;
    margin-top: 0.5rem;
    margin-left: -0.4rem;
    border-radius: 0.8rem;
    height: 4.5rem;
    width: 30rem;
    font-size: 2rem;
    border: 0.2rem solid ${colors.primaryColor};
    color: ${colors.primaryColor};
    background-color: ${colors.secondaryColor};
  }
  input::placeholder {
    color: ${colors.primaryColor};
    opacity: 0.65;
  }
  input[type='file'] {
    height: 5rem;
  }
  input::file-selector-button {
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
    border: 0.2rem solid ${colors.secondaryColor};
    border-radius: 0.5rem;
    cursor: pointer;
  }
  input::file-selector-button:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
    border: 0.2rem solid ${colors.secondaryColor};
  }
  button {
    display: block;
    text-align: center;
    font-size: 1.7rem;
    padding: 1rem;
    margin: 1.5rem auto;
    width: 15rem;
    color: ${colors.secondaryColor};
    background-color: ${colors.primaryColor};
    border-radius: 0.8rem;
    border: 0.2rem solid ${colors.secondaryColor};
  }
  button:hover {
    color: ${colors.primaryColor};
    background: ${colors.secondaryColor};
    border: 0.2rem solid ${colors.primaryColor};
  }
  fieldset {
    border: 0.2rem solid ${colors.primaryColor};
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }
  legend {
    font-size: 3rem;
    color: ${colors.primaryColor};
    padding: 1rem;
    margin: 1rem;
  }

  @media (max-width: 350px) {
    input {
      max-width: 19rem;
    }
    input[type='file'] {
      margin-left: 0;
    }
    label {
      max-width: 19rem;
    }
  }
`;
