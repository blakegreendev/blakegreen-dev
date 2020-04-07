import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>&copy;{new Date().getFullYear()} {this.props.siteName}. All Rights Reserved.</span>
        </div>
      </div>
    );
  }
}
