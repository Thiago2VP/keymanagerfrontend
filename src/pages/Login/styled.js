import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const SectionLogin = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
`;

export const QuestionRegist = styled.div`
  margin-top: 8rem;
  display: flex;
  align-itens: center;
  justify-content: center;
  color: ${primaryColor};
  p {
    font-size: 1.7rem;
  }
  a {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
`;
