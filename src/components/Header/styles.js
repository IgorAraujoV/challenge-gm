import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;

  padding: 10px;

  > div {
    display: flex;
    align-items: center;
  }

  > div img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
  }

  > div span {
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const DetailsButton = styled.button`
  color: #fff;
  background: var(--green-darken);
  font-weight: bold;

  border: 1px solid var(--green-darken);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;

  padding: 5px 10px;

  transition: background 0.3s;

  &:hover {
    background: #95bf3d;
  }
`;

export const LogoutButton = styled.button`
  color: var(--green-darken);
  background: transparent;
  border: 1px solid var(--green-darken);

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;

  padding: 5px 10px;

  transition: background 0.3s;

  &:hover {
    background: #f5ffeb;
  }
`;
