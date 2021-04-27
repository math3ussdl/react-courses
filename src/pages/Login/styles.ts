import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);
`;

export const Form = styled.form`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;

    justify-content: center;
  }

  width: 50rem;
  height: 30rem;
  padding: 2rem;
  border-radius: 1.5rem;

  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 2rem;
  }

  p {
    color: #aaaaaa;
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;

    margin-top: 1.5rem;

    input {
      margin-top: 0.5rem;
      border: 0.5px solid #ddd;
      border-radius: 0.3rem;
      outline: 0;

      width: 18rem;
      height: 2rem;
      padding: 0.2rem 1rem;

      transition: 0.3s ease;
      transition-property: border;

      &:focus {
        border: 1px solid #845ec2;
      }
    }
  }

  .actions {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;

      padding: 0 1.5rem;
      font-size: 1rem;
      border: 0;
      width: 8rem;
      height: 2.5rem;
      border-radius: 0.3rem;

      &#login {
        background: #845ec2;
        color: #fff;
        justify-content: space-between;

        margin-right: 1.5rem;
      }

      &#reset {
        justify-content: center;
      }

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
`;

export const BottomActions = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50rem;

  select {
    position: relative;
    min-width: 200px;
    border-radius: 0.2rem;
    border: 0;
    outline: 0;

    padding: 0.2rem;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 12rem;

    a {
      color: #ccc;
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
`;
