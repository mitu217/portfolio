import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { App } from '../components/App';
import { Head } from '../components/Head';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const IndexPage: React.FC = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(query);

  return (
    <>
      <Head title={title} description={description} />
      <App>
        <Hero />
        <Footer auther={author} />
      </App>
    </>
  );
};

export default IndexPage;
