import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--test-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type='submit'] {
    height: 4rem;
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;

    color: var(--shape);
    font-size: 1rem;
    font-weight: 600;
    background: var(--green);
    border-radius: 0.25rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`
export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;

  button {
    
  }
`;

type RadioBoxProps = {
  isActive: boolean;
  activeColor: 'deposit' | 'withdraw' ;
}

const colors = {
  deposit: '#33CC95',
  withdraw: '#e52e40'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: center;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

  transition: border-color 0.3s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

type InputProps = {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid ${props => props.hasError ? '#e52e40' : '#d7d7d7'};
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const ErrorMessageBox = styled.div`
  margin-top: 1rem;
  padding: 1rem 2rem;
  border: 1px solid var(--red);
  border-radius: 0.25rem;
  background: ${ transparentize(0.9, '#e52e40')};

  p {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--red)
  }
`;