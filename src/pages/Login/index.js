import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

import { Container, Form } from '../../styles/GlobalStyles';
import { SectionLogin, QuestionRegist } from './styled';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');
  const history = get(props, 'history');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha inválida');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath, history }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <SectionLogin>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email:
            <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Entrar</button>
        </Form>
        <QuestionRegist>
          <p>
            Não possui conta?
            <span> </span>
            <Link to="/register">Cadastrar</Link>
          </p>
        </QuestionRegist>
      </SectionLogin>
    </Container>
  );
}
