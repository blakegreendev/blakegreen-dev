import React, { Component } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Blake Green`, `Cloud Architect`, `Blogs`]}
        />
        <div className="site-container blogs-page" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
            </div>
            <ul className="projects-list">
              {data.allContentfulProjects.edges.map((item, index) => {
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

export const pageQuery = graphql`
  query ProjectsQuery {
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