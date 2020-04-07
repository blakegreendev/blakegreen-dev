import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";


export default class AboutMe extends Component {
  render() {
    const data = this.props.data.contentfulAuthor;

    return (
      <Layout>
        <SEO
          title="About Me"
          keywords={[
            `Blake Green`,
            `Cloud Architect`,
            `About Me`
          ]}
        />
        <div className="site-container blog-post">
          <div className="container">
            <Img
              className="feature-img"
              fixed={data.pics.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <div className="details">
              <h1 className="title">About Me</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query AuthorQuery {
    contentfulAuthor {
      id
      name
      twitter
      pics {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
