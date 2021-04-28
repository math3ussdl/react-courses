import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4rem;

  background: #845ec2;
  color: #ffffff;

  h2 {
    margin-left: 2rem;
    font-weight: bold;
    font-size: 1.4rem;
  }

  .right {
    display: flex;
    margin-right: 2rem;

    p {
      font-style: italic;
      margin-right: 1rem;
      margin-top: 0.3rem;
    }

    button {
      background: transparent;
      border: 0;
      color: #ffffff;

      font-size: 1rem;

      width: auto;
      height: auto;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`;
