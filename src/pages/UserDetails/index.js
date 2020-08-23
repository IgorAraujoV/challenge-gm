import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  Container,
  Content,
  Header,
  ProfileButton,
  MapContainer,
  Grid,
} from './styles';
import Map from '../../components/Map';
import RepositoriesList from '../../components/RepositoriesList';

function UserDetails() {
  const history = useHistory();

  const users = useSelector(state => {
    return state.user.users;
  });

  if (users.length === 0) return <Redirect to="/" />;

  const user = users[0];

  return (
    <Container>
      <Grid>
        <Content>
          <Header>
            <button
              onClick={() => {
                history.push('/');
              }}
              type="button"
            >
              <FaArrowLeft size={15} color="#719e3f" />
            </button>
            <img src={user.avatar} alt="Avatar" />
            <h2>{user.login}</h2>
          </Header>
          <span>BIO:</span>
          <p>{user.bio}</p>
          <ProfileButton href={user.url} target="_blank">
            Visitar perfil
            <FaArrowRight size={13} color="#719e3f" />
          </ProfileButton>
          <span>REPOSITÓRIOS FAVORITADOS:</span>
          <RepositoriesList />
        </Content>
        <MapContainer>
          <Map />
        </MapContainer>
      </Grid>
    </Container>
  );
}

export default UserDetails;
