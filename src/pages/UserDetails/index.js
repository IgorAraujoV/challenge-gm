import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';

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
  const [goBack, setGoBack] = useState(false);
  const history = useHistory();
  const { userId } = useParams();

  const users = useSelector(state => {
    return state.user.users;
  });

  if (users.length === 0 || goBack) return <Redirect to="/" />;

  const user = users.filter(userItem => userItem.id === Number(userId))[0];

  console.log('de novo');
  console.log('goback:', goBack);

  return (
    <Container>
      <Grid>
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
          <span>REPOSITÓRIOS FAVORITADOS:</span>
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
