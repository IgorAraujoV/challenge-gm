import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 8px 15px 15px;
  margin-top: 5px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 6px;
    border: 3px solid var(transparent);
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
  }

  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const Repos = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: -5px;

  li {
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    width: 100%;

    border-top: 1px solid #eee;

    img {
      width: 30px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;

      margin-left: 5px;
    }
    strong {
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #333;
    }

    span {
      color: #888;
      font-size: 12px;
    }
  }
  li:first-child {
    border: 0;
    margin-top: 0;
  }
`;

export const Star = styled.button`
  border: 0;
  background: transparent;
`;
