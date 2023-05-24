import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container, Form, MainTittle } from '../../styles/GlobalStyles';
import { SectionWord } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Word({ match, history }) {
  const dispatch = useDispatch();

  const id = get(match, 'params.id', '');

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [keyPass, setKeyPass] = useState('');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/words/${id}`);

        setName(data.name);
        setLogin(data.login);
        setKeyPass(data.keyPass);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [id, history]);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (!name) {
      formErrors = true;
      toast.error('Nome precisa ser preenchido');
    }

    if (!login) {
      formErrors = true;
      toast.error('Login precisa ser preenchido');
    }

    if (!keyPass) {
      formErrors = true;
      toast.error('Senha precisa ser preenchida');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      if (id) {
        await axios.put(`/words/${id}`, { name, login, keyPass });
        toast.success('Dado armazenado');
        history.push('/');
      } else {
        await axios.post('/words', { name, login, keyPass });
        toast.success('Dado armazenado');
        history.push('/');
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <SectionWord>
        <MainTittle>Informação de conta</MainTittle>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Obrigatório" />
          </label>

          <label htmlFor="login">
            Login:
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Obrigatório" />
          </label>

          <label htmlFor="keyPass">
            Senha:
            <input type="text" value={keyPass} onChange={(e) => setKeyPass(e.target.value)} placeholder="Obrigatório" />
          </label>

          <button type="submit">Salvar</button>
        </Form>
      </SectionWord>
    </Container>
  );
}

Word.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
