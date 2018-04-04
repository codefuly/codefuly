import React from "react";
import { string } from "prop-types";
import "./social.scss";

const Social = ({ color }) => (
  <div className="social-container">
    <ul className="social-list">
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} className="icon-brand" />
        </a>
      </li>
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} className="icon-brand2" />
        </a>
      </li>
      <li className="social-icon">
        <a href="">
          <span style={{color: color}} className="icon-brand3" />
        </a>
      </li>
    </ul>
  </div>
);

Social.propTypes = {
  color: string.isRequired
}

export default Social;
