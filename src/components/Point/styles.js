import styled from 'styled-components';

export const Container = styled.div`
  width: 30px;
  height: 30px;

  img {
    border: ${props => (props.logged ? '2px solid var(--green-darken)' : 0)};
    width: 100%;

    border-radius: 50%;
  }
`;
