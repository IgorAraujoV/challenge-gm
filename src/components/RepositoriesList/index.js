import React from 'react';

import { FaRegStar, FaStar } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Repos, Star } from './styles';
import {
  addStarredRepository,
  removeStarredRepository,
} from '../../store/auth/actions';

function RepositoriesList({ user }) {
  const dispatch = useDispatch();
  const userLogged = useSelector(state => {
    return state.auth.user;
  });

  const repositoryIds = userLogged.starredRepos.map(repo => repo.id);

  async function handleStar(repo) {
    if (!repositoryIds.includes(repo.id)) {
      dispatch(addStarredRepository(repo));
      toast.success(`Estrela adicionada a ${repo.name}.`);
    } else {
      dispatch(removeStarredRepository(repo.id));
      toast.success(`Estrela removida de ${repo.name}.`);
    }
  }

  return (
    <Container>
      <Repos>
        {user.starredRepos.map((repo, index) => (
          <li key={`${repo.id}${user.id}`}>
            <img src={repo.owner.avatar} alt={`avatar-${index}`} />
            <div>
              <strong>{repo.name}</strong>
              <span>
                {repo.owner.name ? repo.owner.name : repo.owner.login}
              </span>
            </div>
            <Star onClick={() => handleStar(repo)}>
              {repositoryIds.includes(repo.id) ? (
                <FaStar size={20} color="#e6e602" />
              ) : (
                <FaRegStar size={20} color="#e6e602" />
              )}
            </Star>
          </li>
        ))}
      </Repos>
    </Container>
  );
}

export default RepositoriesList;
