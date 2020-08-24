import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  Container,
  Content,
  Header,
  ProfileButton,
  MapContainer,
  Grid,
  HeaderContainer,
} from './styles';
import Map from '../../components/Map';
import HeaderComponent from '../../components/Header';
import RepositoriesList from '../../components/RepositoriesList';

function UserDetails() {
  const [goBack, setGoBack] = useState(false);
  const { userId } = useParams();

  const users = useSelector(state => {
    return state.user.users;
  });

  const userLogged = useSelector(state => {
    return state.auth.user;
  });

  if ((users.length === 0 && !userLogged) || goBack)
    return <Redirect to="/home" />;

  let user = users.filter(userItem => userItem.id === Number(userId))[0];

  if (!user) user = userLogged;

  return (
    <Container>
      <Grid>
        <HeaderContainer>
          <HeaderComponent />
        </HeaderContainer>
        <Content>
          <Header>
            <button
              onClick={e => {
                e.preventDefault();
                setGoBack(true);
              }}
              type="button"
            >
              <FaArrowLeft size={15} color="#719e3f" />
            </button>
            <img src={user.avatar} alt="Avatar" />
            <h2>{user.name ? user.name : user.login}</h2>
          </Header>
          {user.bio && <span>BIO:</span>}
          <p>{user.bio}</p>
          <ProfileButton href={user.url} target="_blank">
            Visitar perfil
            <FaArrowRight size={13} color="#719e3f" />
          </ProfileButton>
          {!!user.starredRepos.length && <span>REPOSITÓRIOS FAVORITADOS:</span>}
          <RepositoriesList user={user} />
        </Content>
        <MapContainer>
          <Map user={user} />
        </MapContainer>
      </Grid>
    </Container>
  );
}

export default UserDetails;
