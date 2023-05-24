import styled from 'styled-components';

import * as colors from '../../config/colors';

export const SectionHome = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: start;
  padding: 1rem auto;
  position: relative;
`;

export const HomeInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 7rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${colors.successColor};
  color: ${colors.secondaryColor};
  border-radius: 2rem;
  width: 35rem;
  min-height: 16rem;

  h2 {
    font-size: 2.6rem;
    margin: 1rem auto;
  }
  a {
    font-size: 1.8rem;
    color: ${colors.secondaryColor};
    text-align: center;
  }
  a:hover {
    text-decoration: underline;
  }
  #exc {
    color: ${colors.dangerColor};
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: start;
  justify-content: start;
  margin: 2rem auto;
  padding: 1rem 1rem 3.4rem 1rem;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  border-radius: 2rem;
  width: 35rem;
  min-height: 16rem;
  position: relative;

  h2 {
    font-size: 2.3rem;
    margin: 1rem 0.5rem;
  }
  p {
    font-size: 1.8rem;
    color: ${colors.secondaryColor};
    margin: 0.3rem 0.5rem;
    display: inline;
    word-break: break-all;
    white-space: normal;
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
`;

export const WordOpts = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  font-size: 1.8rem;

  a {
    color: ${colors.secondaryColor};
    margin: auto 0.5rem;
  }
`;

export const Plus = styled.button`
  font-size: 6.4rem;
  display: flex;
  flex-diretion: column;
  align-itens: center;
  justify-content: center;
  padding: 0;
  width: 6.4rem;
  border-radius: 100%;
  background-color: ${colors.secondaryColor};
  color: ${colors.successColor};
  position: fixed;
  bottom: 9rem;
  right: 7rem;

  &:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.errorColor};
  }
  @media (max-width: 900px) {
    right: 2rem;
  }
  @media (max-width: 400px) {
    right: 1.4rem;
  }
`;
