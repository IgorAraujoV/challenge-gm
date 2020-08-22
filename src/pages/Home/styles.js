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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  height: 150px;
  width: 400px;
  background: #FFF;
  border-radius: 5px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > form {
    display: flex;
    margin-top: 20px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100%;

    &::placeholder {
      color: #bbb;
      letter-spacing: 0.2px;
    }
  }
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;

    > svg {
      margin-right: 10px;
    }
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
