import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

export default class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="projects-section section" id="Projects">
        <div className="container">
          <div className="section-head">
            <Link to="/projects">
              <h2>Latest Projects</h2>
            </Link>
          </div>
          <ul className="projects-list">
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <Link className="link" to={item.node.slug} />
                    <Img
                      fixed={item.node.featureImage.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                    <div className="details">
                      <h3 className="title">{item.node.title}</h3>
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
          <div className="see-more">
            <Link to="/projects">
              <span>More Projects</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
