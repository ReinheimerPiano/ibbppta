import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const LivePageTemplate = ({ urlLive, title, heading, description }) => (
  <div className='content'>
    <div className='full-width-image-container margin-top-0'>
      <iframe
        title='Live da IBBPPTA'
        style={{
          width: "100vw",
          height: "100vh",
        }}
        src={urlLive}
        frameborder='0'
        allowfullscreen>
        {" "}
      </iframe>{" "}
    </div>{" "}
    <h2
      className='has-text-weight-bold is-size-1'
      style={{
        boxShadow: "0.5rem 0 0 rgb(43 89 183), -0.5rem 0 0 rgb(43 89 183)",
        backgroundColor: "rgb(43 89 183)",
        color: "white",
        padding: "1rem",
      }}>
      {" "}
      {title}{" "}
    </h2>{" "}
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-7 is-offset-1'>
              <h3 className='has-text-weight-semibold is-size-2'>
                {" "}
                {heading}{" "}
              </h3>{" "}
              <p> {description} </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>{" "}
  </div>
);

LivePageTemplate.propTypes = {
  urlLive: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
};

const LivePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <LivePageTemplate
        urlLive={frontmatter.urlLive}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />{" "}
    </Layout>
  );
};

LivePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default LivePage;

export const livePageQuery = graphql`
  query LivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        urlLive
        title
        heading
        description
      }
    }
  }
`;
