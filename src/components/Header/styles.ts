import styled from 'styled-components';

const Container = styled.header`
  background: var(--blue);
`;

const Content = styled.div`
  display: flex;
  max-width: 1120px;
  width: 100%;

  margin: 0 auto;
  padding: 2rem 1rem 9rem;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    width: 12rem;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export { Container, Content }