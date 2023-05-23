import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../config/colors';

export const MF = styled.footer`
  background: ${primaryColor};
  min-height: 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${secondaryColor};

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;
