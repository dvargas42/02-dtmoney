import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33CC95;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.50%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.5)
  }

  .react-modal-content {
    position: relative;
    max-width: 576px;
    width: 100%;
    padding: 3rem;
    border-radius: 0.25rem;
    background: var(--background);
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    background: transparent;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`;