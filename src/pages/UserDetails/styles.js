import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-areas: 'PROFILE' 'MAP';
  grid-template-columns: 300px auto;
  grid-template-rows: 100%;

  grid-column-gap: 15px;
  padding: 10px;
  max-height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  grid-area: 'PROFILE';

  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  height: 100%;

  > span {
    color: #aaa;
    font-size: 12px;

    margin: 15px 0 0 15px;
  }

  > p {
    text-align: left;
    color: #444;
    font-size: 14px;
    letter-spacing: 0.16px;

    margin: 5px 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: flex-start;

    background: transparent;

    width: 40px;
    height: 40px;

    border: 1px solid var(--green-darken);
    border-radius: 50%;

    margin-left: 10px;
    margin-top: 10px;

    transition: background 0.3s;

    &:hover {
      background: #f5ffeb;
    }
  }

  > img {
    height: 120px;
    width: 120px;
    border-radius: 50%;

    margin-top: -10px;
  }

  > h2 {
    color: #333;
    margin-top: 10px;
  }
`;

export const ProfileButton = styled.a`
  height: 30px;
  color: var(--green-darken);
  background: transparent;
  border: 1px solid var(--green-darken);

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px 15px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;

  transition: background 0.3s;

  svg {
    margin-left: 10px;
  }

  &:hover {
    background: #f5ffeb;
  }
`;

export const MapContainer = styled.div`
  grid-area: 'MAP';

  display: flex;
  width: 100%;
`;
