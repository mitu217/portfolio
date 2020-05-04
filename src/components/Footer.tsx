import * as React from 'react';
import styled from 'styled-components';
import { Container as BaseContainer } from './Container';
import { blackColor, whiteColor } from '../variables';

const Container = styled(BaseContainer)`
  background: ${blackColor};
  color: ${whiteColor};
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  position: relative;
  min-height: calc(10vh);
`;

export type Props = {
  auther: string;
};

export const Footer: React.FC<Props> = ({ auther }) => (
  <>
    <Container>
      <footer>
        © {new Date().getFullYear()} - Copyright {auther}, All Rights Reserved.
      </footer>
    </Container>
  </>
);

