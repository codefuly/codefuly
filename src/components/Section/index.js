import React from 'react'
import { string } from 'prop-types'
import './section.scss'
import Button from '../Button'

const Section = ({ image, heading, description, comments }) => (
  <div className="section-container">
    <div className={`section ${heading.replace(' ', '-').toLowerCase()}`}>
      <div
        className="section-image"
        style={{ backgroundImage: `url(${image})` }}
        id={heading.replace(' ', '-').toLowerCase()}
      />
      <div className="section-content">
        <h6 className="section-header">{heading}</h6>
        <p className="section-description">{description}</p>
        <hr />
        <p className="section-extra">Expertise: {comments}</p>
      </div>
      <Button text={'Contact us now'} link={'/contact'} />
    </div>
  </div>
) 

Section.propTypes = {
  image: string.isRequired,
  heading: string.isRequired,
  description: string.isRequired,
  comments: string.isRequired,
}

export default Section