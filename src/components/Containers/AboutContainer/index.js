import React from 'react'
import Button from '../../Button'
import './aboutcontainer.scss'
import image from '../../../data/images/home.svg'
import Breadcrumb from '../../Breadcrumb';
import Expertise from '../../Expertise';



class AboutContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="about-container">
        <Breadcrumb title={'01. Who we are'} />
        <div className="about">
          <div className="about-content">
            <div className="about-text">
              <h5 className="about-title">
                We are a team of application developers and technology
                consultants
              </h5>
              <p>
                We are a team of web designers and programmers dedicated to
                create best products for our clients. Our focus is to find an
                original and performant solution in order to bring your online
                presence to the next level. We believe that a good company
                deserves the best online reputation possible.
              </p>
              <p>
                From elegant and effective website and rejuvenation of your
                visual identity to an aggressive digital marketing campaign and
                most reliable hosting. We are here to strengthen your positions
                and beat the competition out of the way.
              </p>{' '}
              <p>
                From elegant and effective website and rejuvenation of your
                visual identity to an aggressive digital marketing campaign and
                most reliable hosting. We are here to strengthen your positions
                and beat the competition out of the way.
              </p>
            </div>
            <div className="about-text">
              <h5 className="about-title">We look forward to work with:</h5>
              <ul className="about-list">
                <li>Small and medium-sized enterprises (SMEs)</li>
                <li>Startups</li>
                <li>Blockchain ventures</li>
                <li>Advertisers</li>
                <li>Designers</li>
                <li>Creative individuals</li>
                <li>Technology companies with outsource needs</li>
              </ul>
              <Button text={'Contact us now'} link={'/contact'} />
            </div>
          </div>
          <Expertise />
        </div>
      </div>
    )
  }
}

export default AboutContainer
