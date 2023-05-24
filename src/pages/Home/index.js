import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaPlusCircle, FaPencilAlt, FaTrash, FaExclamationCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import * as StyleComponents from './styled';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };

  const id = useSelector((state) => state.auth.user.id);
  const nameStored = useSelector((state) => state.auth.user.name);

  const [name, setName] = useState('');
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (!id) return;

    setName(nameStored);

    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/words');
      setWords(response.data);
      setIsLoading(false);
    }

    getData();
  }, [id, nameStored]);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'inline');
    e.currentTarget.remove();
    toast.error('Clique novmente para excluir');
  };

  const handleDelete = async (e, wordId, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/words/${wordId}`);
      const newWords = [...words];
      newWords.splice(index, 1);
      setWords(newWords);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <StyleComponents.SectionHome>
        <StyleComponents.HomeInfo>
          <StyleComponents.CardUser>
            <h2>{name}</h2>
            <Link to="/register">Editar</Link>
            <Link to="/exclusion" id="exc">
              Excluir Conta
            </Link>
            <Link onClick={handleLogout} to="/logout">
              Sair
            </Link>
          </StyleComponents.CardUser>
          {words.map((word, index) => (
            <StyleComponents.Card key={word.id}>
              <h2>{word.name}</h2>
              <p>{word.login}</p>
              <p>{word.keyPass}</p>
              <StyleComponents.WordOpts>
                <Link to={`/word/${word.id}/edit`} alt="Editar">
                  <FaPencilAlt />
                </Link>
                <Link to={`/word/${word.id}/delete`} alt="Excluir" onClick={handleDeleteAsk}>
                  <FaTrash color="#8F1818" />
                </Link>
                <FaExclamationCircle
                  color="#8F1818"
                  display="none"
                  cursor="pointer"
                  onClick={(e) => handleDelete(e, word.id, index)}
                />
              </StyleComponents.WordOpts>
            </StyleComponents.Card>
          ))}
        </StyleComponents.HomeInfo>
        <Link to="/word">
          <StyleComponents.Plus>
            <FaPlusCircle />
          </StyleComponents.Plus>
        </Link>
      </StyleComponents.SectionHome>
    </Container>
  );
}
