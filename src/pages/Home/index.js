import React, { useState, useEffect } from 'react';

import { FaGithubAlt, FaSearch, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUserRequest } from '../../store/user/actions';
import {
  Container,
  Content,
  SubmitButton,
  Title,
  Users,
  DetailsButton,
} from './styles';
import Header from '../../components/Header';

function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const users = useSelector(state => state.user.users);

  const userLogged = useSelector(state => state.auth.user);

  useEffect(() => {
    setUsername('');
  }, [users]);

  useEffect(() => {
    if (error) toast.error('Usuário não encontrado!');
  }, [error]);

  if (!userLogged) return <Redirect to="/" />;

  function goToDetails(userId) {
    history.push(`/details/${userId}`);
  }

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (userLogged.login.toLowerCase() === username.toLowerCase()) {
      toast.info('Não é possível adicionar o usuário já logado.');
      return;
    }
    if (users.find(user => user.login === username)) {
      toast.warning('Usuário já adicionado');
      return;
    }

    dispatch(addUserRequest(username));
  }

  return (
    <Container>
      <Header showButton goToDetails={goToDetails} />
      <Content>
        <Title>
          <FaGithubAlt />
          Usuários
        </Title>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Digite o nome do usuário no GitHub"
          />
          <SubmitButton isLoading={isLoading ? 1 : 0}>
            {isLoading ? (
              <FaSpinner color="#fff" size={15} />
            ) : (
              <FaSearch color="#fff" size={15} />
            )}
          </SubmitButton>
        </form>

        <Users>
          {users.map((user, index) => (
            <li key={user.id}>
              <img src={user.avatar} alt={`avatar-${index}`} />
              <div>
                <strong>{user.name ? user.name : user.login}</strong>
                {user.name && <span>{user.login}</span>}
              </div>
              <DetailsButton type="button" onClick={() => goToDetails(user.id)}>
                Detalhes
              </DetailsButton>
            </li>
          ))}
        </Users>
      </Content>
    </Container>
  );
}

export default Home;
