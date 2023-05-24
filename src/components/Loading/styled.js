import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1f33;
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(113, 176, 217, 0.5);
  }

  span {
    z-index: 2;
  }
`;
