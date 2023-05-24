import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { SectionExclusion, ExclusionTittle, BtnsArea, BtnNo, BtnYes } from './styled';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Exclusion() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleFinishAll() {
    try {
      setIsLoading(true);
      await axios.delete('/users');
      toast.success('Cadastro removido com sucesso');
      setIsLoading(false);
      dispatch(actions.loginFailure());
      toast.success('Deslogado');
      history.push('/');
    } catch (err) {
      setIsLoading(false);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <SectionExclusion>
        <ExclusionTittle>Tem certeza que deseja excluir o registro?</ExclusionTittle>
        <BtnsArea>
          <BtnNo>
            <Link to="/">Não</Link>
          </BtnNo>
          <BtnYes onClick={handleFinishAll}>Sim</BtnYes>
        </BtnsArea>
      </SectionExclusion>
    </Container>
  );
}
