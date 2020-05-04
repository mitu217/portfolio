import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  left: {
    children: React.ReactNode;
  };
  right: {
    children: React.ReactNode;
  };
}

const Box = styled.div`
  display: flex;
  width: 80%;
`;

const Section = styled.section`
  flex: 0.5;
  text-align: center;
  max-size: 50%;
`;

const SectionBox = styled.div`
  text-align: left;
  margin: 0 50px;
`;

export const Frame: React.FC<Props> = ({ left, right }) => (
  <>
    <Box>
      <Section>
        <SectionBox className="transition">{left.children}</SectionBox>
      </Section>
      <Section>
        <SectionBox className="transition">{right.children}</SectionBox>
      </Section>
    </Box>
  </>
);