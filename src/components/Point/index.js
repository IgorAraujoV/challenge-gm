import React from 'react';

import { Container } from './styles';

function Point({ user }) {
  return (
    <Container key={`${user.coordinates.lat}`}>
      <img src={user.avatar} alt="user-avatar" />
    </Container>
  );
}

export default Point;
