import React from "react";
import expertise from "../../data/content/expertise.js";

import "./expertise.scss"

const Expertise = () => (
  <div className="expertise-section">
    {" "}
    <h5 className="expertise-title">Tools and Expertise:</h5>
    <ul className="expertise-list">
      {expertise.map(expertiseItem => (
        <li className="expertise-item">
          <img src={expertiseItem.icon} alt={expertiseItem.heading} />
          {expertiseItem.heading}
        </li>
      ))}
    </ul>
  </div>
);

export default Expertise;
