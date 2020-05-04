import * as React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Container as BaseContainer } from './Container';

const Container = styled.div`
  box-sizing: border-box;
`;

export const App: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
