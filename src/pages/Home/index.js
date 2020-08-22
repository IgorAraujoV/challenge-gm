import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container, Content, SubmitButton, Title } from './styles';
import { FaGithubAlt, FaSearch, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { addUserRequest } from '../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const success = useSelector(state => state.user.success);

  useEffect(() => {
    if (error)
      toast.error("Usuário não encontrado!");
  }, [error])
  
  useEffect(() => {
    if (success)
      history.push('/details');
  }, [history, success])
  //var users = useSelector(state => state.user)

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
        </Content>
      </Container>
  );
}

export default Home;