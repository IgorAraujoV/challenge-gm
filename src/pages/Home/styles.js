import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100%;

  padding-top: 50px;
`;

export const Content = styled.div`
  width: 600px;

  margin: 0 auto;
  padding: 20px;

  background: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  > form {
    display: flex;
    margin-top: 20px;
  }

  > form input {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;

    &::placeholder {
      color: #bbb;
      letter-spacing: 0.2px;
    }
  }

  @media (max-width: 600px) {
    width: 330px;
    padding: 10px;

    > form {
      margin-top: 10px;
    }
    input {
      font-size: 12px;
      padding: 10px 7px;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #88bf4b;
  border-radius: 4px;
  border: 0;

  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: 10px;
  justify-content: center;

  &:hover {
    background: #719e3f;
    transition: 0.2s;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

export const Users = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 10px;

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
      background: #e0e0e0;
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
      margin-top: 3px;
    }
  }
  li:first-child {
    border: 0;
    margin-top: 0;
  }
`;

export const DetailsButton = styled.button`
  color: var(--green-darken);
  background: transparent;
  border: 1px solid var(--green-darken);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  font-size: 12px;
  font-weight: 500;

  padding: 5px 10px;

  transition: background 0.3s;

  &:hover {
    background: #f5ffeb;
  }
`;
