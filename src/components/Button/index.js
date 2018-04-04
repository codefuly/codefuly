import React from "react";
import Link from 'gatsby-link'
import { string } from "prop-types";

import "./button.scss"

const Button = ({ text, link }) => (
    <Link to={link} className="Button">{text}</Link>
);

Button.propTypes = {
  text: string.isRequired,
  link: string.isRequired
};

export default Button;