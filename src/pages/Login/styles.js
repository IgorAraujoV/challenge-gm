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
    flex-direction: column;
    margin-top: 20px;
  }

  > form input {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    margin-top: 5px;

    &::placeholder {
      color: #aaa;
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
  justify-content: center;

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
  justify-content: center;

  margin-top: 15px;
  padding: 10px 10px;

  color: #fff;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background: #719e3f;
    transition: 0.2s;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    margin-left: 15px;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;
