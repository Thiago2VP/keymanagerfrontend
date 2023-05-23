import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Form, MainTittle } from '../../styles/GlobalStyles';
import { SectionRegist } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register(props) {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);
  const emailStored = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const { history } = props;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const emailOld = emailStored;

  React.useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (password !== repassword) {
      formErrors = true;
      toast.error('As senhas devem ser iguais');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id, history }));

    if (email !== emailOld) {
      toast.success('Email Alterado');
      dispatch(actions.loginFailure());
      window.location = '/login';
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <SectionRegist>
        <MainTittle>{id ? 'Editar dados' : 'Crie sua conta'}</MainTittle>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Obrigatório" />
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email válido" />
          </label>

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entre 6 e 50 caracteres"
            />
          </label>

          <label htmlFor="repassword">
            Repetir Senha:
            <input
              type="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              placeholder="Igual a anterior"
            />
          </label>

          <button type="submit">{id ? 'Salvar' : 'Criar conta'}</button>
        </Form>
      </SectionRegist>
    </Container>
  );
}

Register.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
