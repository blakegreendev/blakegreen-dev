import React from "react";
import PropTypes from "prop-types";
import {
  TwitterShareButton
} from "react-share";

const Share = ({ socialConfig }) => {
  return (
    <div className="post-social">
      <h6 className="title is-6">Share:</h6>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via="blakgreendev"
      >
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
    </div>
  );
};

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
Share.defaultProps = {
  tags: []
};

export default Share;
