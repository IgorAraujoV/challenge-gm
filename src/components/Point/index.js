import React from 'react';

import { Container } from './styles';

function Point({ user, logged }) {
  return (
    <Container key={`${user.coordinates.lat}`} logged={logged}>
      <img src={user.avatar} alt="user-avatar" />
    </Container>
  );
}

export default Point;
