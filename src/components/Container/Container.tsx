import * as React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
  className?: string;
}

const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  min-height: calc(100vh);
`;

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <Section className={className}>{children}</Section>
);
