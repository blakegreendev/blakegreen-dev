import React, { Component } from "react";
import { graphql } from "gatsby";
// import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Streams extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Streams"
          keywords={[`Blake Green`, `Cloud Architect`, `Streams`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Streams</h1>
            </div>
            <ul className="blogs-list">
              {data.allContentfulStreams.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <p>{item.node.description}</p>
                        <span className="date">
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {moment(item.node.date).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}
// https://www.gatsbyjs.com/docs/data-fetching/#fetching-data-at-client-side-runtime
// https://www.youtube.com/watch?v=8YWrmZoUYGs&t=136s
export const pageQuery = graphql`
  query StreamsQuery {
    allContentfulProjects(
      sort: { fields: [date], order: DESC }
    ){
      edges {
        node {
          title
          slug
          createdAt
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;