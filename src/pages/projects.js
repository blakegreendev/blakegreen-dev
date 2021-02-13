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
          keywords={[`Blake Green`, `Cloud Architect`, `Projects`]}
        />
        <div className="work section" id="Work">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Projects</h1>
            </div>
            <ul className="work-list">
              {data.allContentfulProjects.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={item.node.link} />
                      <div className="details">
                        <a href={item.node.link} target="_blank" rel="noreferrer">
                          <h2 className="title">{item.node.title}</h2>
                        </a>
                        <p>{item.node.description}</p>
                        <a href={item.node.demo} target="_blank" rel="noreferrer">
                          <h4 className="demo">Demo</h4>
                        </a>
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
          description
          demo
          link 
          slug
          createdAt
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;