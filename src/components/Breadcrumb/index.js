import React from 'react';
import { string } from "prop-types";
import "./breadcrumb.scss";

const Breadcrumb = ({ title }) => (
    <div className="breadcrumb">
        <h6 className="breadcrumb-title">{title}</h6>
    </div>
);

Breadcrumb.propTypes = {
  title: string.isRequired
};

export default Breadcrumb;