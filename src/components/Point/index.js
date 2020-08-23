import React from 'react';

import { Container } from './styles';

function Point({ user }) {
  return (
    <Container>
      <img src={user.avatar} alt="user-avatar" />
    </Container>
  );
}

export default Point;
