import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SectionExclusion = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  text-align: center;
  padding-top: 1rem;

  @media (max-width: 420px) {
    justify-content: center;
    padding-top: 2rem;
  }
`;

export const ExclusionTittle = styled.h1`
  color: ${colors.primaryColor};
  font-size: 3.2rem;
`;

export const BtnsArea = styled.div`
  margin: 4rem auto;
  width: 20rem;
  display: flex;
  flex-direction: row;
  align-itens: center;
  justify-content: space-evenly;
`;

export const BtnNo = styled.button`
  padding: 0;
  margin: 0;
  background-color: ${colors.secondaryColor};
  a {
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
    border: 0.2rem solid ${colors.primaryColor};
    padding: 1rem 2rem;
    font-size: 1.8rem;
    border-radius: 1rem;
  }
  a:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryColor};
    border: 0.2rem solid ${colors.primaryColor};
  }
`;

export const BtnYes = styled.button`
  background-color: ${colors.errorColor};
  color: ${colors.secondaryColor};
  border: 0.2rem solid ${colors.errorColor};
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;

  :hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.errorColor};
    border: 0.2rem solid ${colors.errorColor};
  }
`;
