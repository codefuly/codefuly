import React from 'react'
import Button from '../../Button'
import './contactcontainer.scss'
import image from '../../../data/images/home.svg'
import Breadcrumb from '../../Breadcrumb'
import ContactForm from '../../ContactForm'

class ContactContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="contact-container">
        <Breadcrumb title={'04. How to find us'} />
        <div className="invitation">
          <h5 className="invitation-heading">Contact us</h5>
          <p className="invitation-description" id="invitation-description">
            Every great partnership starts from 'Hello'.
          </p>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default ContactContainer
