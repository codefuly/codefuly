import React from 'react'
import Button from '../../Button'
import './homecontainer.scss'
import image from '../../../data/images/home.svg'

class HomeContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="call-to-action-container">
            <div className="call-to-action">
              <h1>
                Advanced application development and user experience solutions.
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                iure explicabo harum fugit praesentium! Aliquid asperiores
                consequatur quaerat quae aliquam.
              </p>
              <Button text={'Explore our services'} link={'/services'} />
            </div>
          </div>
          <img className="image-container" src={image} alt="" />
        </div>
      </div>
    )
  }
}

export default HomeContainer
