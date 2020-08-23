import React from 'react';

import { FaRegStar, FaStar } from 'react-icons/fa';
import { Container, Repos, Star } from './styles';

function RepositoriesList({ user }) {
  return (
    <Container>
      <Repos>
        {user.starredRepos.map((repo, index) => (
          <li key={`${repo.id}${user.id}`}>
            <img src={repo.owner.avatar_url} alt={`avatar-${index}`} />
            <div>
              <strong>{repo.name}</strong>
              <span>
                {repo.owner.name ? repo.owner.name : repo.owner.login}
              </span>
            </div>
            <Star>
              <FaRegStar size={20} color="#e6e602" />
            </Star>
          </li>
        ))}
      </Repos>
    </Container>
  );
}

export default RepositoriesList;
