import React from 'react';

import { FaGithubAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Container, LogoutButton, DetailsButton } from './styles';
import { logout } from '../../store/auth/actions';
import { clearUsers } from '../../store/user/actions';

function Header({ showButton, goToDetails }) {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function handleLogoutButton() {
    dispatch(clearUsers());
    dispatch(logout());
  }

  return (
    <Container>
      <div>
        <FaGithubAlt size={20} />
        <span>FinDev</span>
      </div>
      <div>
        <LogoutButton type="button" onClick={() => handleLogoutButton()}>
          Sair
        </LogoutButton>
        {showButton && (
          <DetailsButton type="button" onClick={() => goToDetails(user.id)}>
            Detalhes
          </DetailsButton>
        )}
        <img src={user.avatar} alt="avatar" />
      </div>
    </Container>
  );
}

export default Header;
