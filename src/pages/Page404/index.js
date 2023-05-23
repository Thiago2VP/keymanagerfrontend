import React from 'react';

import { Container, MainTittle } from '../../styles/GlobalStyles';
import { Section404 } from './styled';

export default function Page404() {
  return (
    <Container>
      <Section404>
        <MainTittle>Erro 404</MainTittle>
        <p>Página não encontrada</p>
      </Section404>
    </Container>
  );
}
