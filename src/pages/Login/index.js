import React, { useState, useEffect } from 'react';

import { FaGithubAlt, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, SubmitButton, Title } from './styles';
import { loginRequest } from '../../store/auth/actions';

function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const users = useSelector(state => state.auth.user);
  const success = useSelector(state => state.auth.success);

  useEffect(() => {
    setUsername('');
  }, [users]);

  useEffect(() => {
    if (error) toast.error('Usuário não encontrado!');
  }, [error]);

  useEffect(() => {
    if (success) history.push(`/home`);
  }, [success, history]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginRequest(username));
  }

  return (
    <Container>
      <Content>
        <Title>
          <FaGithubAlt />
          FinDev
        </Title>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Digite seu nome de usuário do GitHub"
          />
          <SubmitButton isLoading={isLoading ? 1 : 0}>
            {isLoading ? 'Entrando' : 'Entrar'}
            {isLoading && <FaSpinner color="#fff" size={15} />}
          </SubmitButton>
        </form>
      </Content>
    </Container>
  );
}

export default Home;
