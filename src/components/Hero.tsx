import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container as BaseContainer } from './Container/Container';
import { blackColor, whiteColor, subWhiteColor, subBlackColor} from '../variables';
import { Frame } from './Frame';

const Container = styled(BaseContainer)`
  background: ${whiteColor};
  color: ${blackColor};
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const AvatorContainer = styled(BaseContainer)``

const Avatar = styled.div<{ url: string }>`
  background: ${({ url }) => `url('${url}')`};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 220px;
  width: 220px;
  border: 2px solid ${subWhiteColor};
`;

const ProfileContainer = styled(BaseContainer)`
  flex-direction: column;
`;

const ProfileNameSection = styled.span`
  font-size: 3.6rem;
  text-align: left;
  margin: 32px 0;
  width: 100%;
`;

const ContactContainer = styled.table`
  width: 100%;
  min-width: 340px;
`;

const ContactSection = styled.tr`
  color: ${subBlackColor};
  font-size: 1.8rem;
  line-height: 2.4rem;
`;

const ContactKeySection = styled.td`
  width: 80px;
`;

const ContactValueSection = styled.td``;

const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dataJson {
      sns {
        key
        value
      }
    }
  }
`;

export const Hero: React.FC = () => {
  const {
    file,
    dataJson: { sns },
  } = useStaticQuery(query);
  const avatar = file?.childImageSharp?.fixed?.src;

  return (
    <>
      <Container>
        <Frame
          left={{
            children: (
              <AvatorContainer>
                <Avatar url={avatar} />
              </AvatorContainer>
            ),
          }}
          right={{
            children: (
              <ProfileContainer>
                <ProfileNameSection>mitu</ProfileNameSection>
                <ContactContainer>
                  {sns && sns.map(({ key, value }: any) => {
                    return (
                      <ContactSection>
                        <ContactKeySection>{key}</ContactKeySection>
                        <ContactValueSection>{value}</ContactValueSection>
                      </ContactSection>
                    );
                  })}
                </ContactContainer>
              </ProfileContainer>
            ),
          }}
        />
      </Container>
    </>
  );
}