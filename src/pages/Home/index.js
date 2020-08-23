import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { FaGithubAlt, FaSearch, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
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

function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    setUsername('');
  }, [users]);

  useEffect(() => {
    console.log('error, show toast: ', error);
    if (error) toast.error('Usuário não encontrado!');
  }, [error]);

  function goToDetails(userId) {
    history.push(`/details/${userId}`);
  }
  // var users = useSelector(state => state.user)

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addUserRequest(username));
  }

  return (
    <Container>
      <Content>
        <Title>
          <FaGithubAlt />
          Finder
        </Title>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Digite seu nome de usuário do GitHub"
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
