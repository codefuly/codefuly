import React from 'react'
import './careercontainer.scss'
import Breadcrumb from '../../Breadcrumb';
import Card from '../../Card';
import jobs from '../../../data/content/jobs.js'


class CareerContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="career-container">
        <Breadcrumb title={'03. What we look for'} />
        <div className="career">
          <div className="career-content">
            <p>Currently, we are looking for:</p>
            <div className="card-row">
              {jobs.map(job => (
                <Card
                  icon={job.icon}
                  heading={job.heading}
                  description={job.description}
                />
              ))}
            </div>
            <h5>Our core values:</h5>
            <ul className="values-list">
              <li className="value">
                <strong>
                ❤️ Empathy
                </strong>
              </li>
              <li className="value">
                <strong>
                🛠 Expertise
                </strong>
              </li>
              <li className="value">
                <strong>
                🤩 Ambition
                </strong>
              </li>
              <li className="value">
                <strong>
                🤓 Curiosity
                </strong>
              </li>
              <li className="value">
                <strong>
                ☺️ Cheerfulness
                </strong>
              </li>
              <li className="value">
                <strong>
                💡 Creativity
                </strong>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              perferendis rem commodi molestias maiores molestiae dicta dolore
              minus, voluptates fuga modi explicabo doloremque quidem aut
              corrupti quis, cumque optio aperiam illum illo est alias. Soluta,
              exercitationem! Eum distinctio dolor possimus.
            </p>
            <h5>Interested? Drop us a message.</h5>
            <a className="career-email" href="">
              career@codefuly.com
            </a>
          </div>
          <div className="career-image-container">
            <img
              className="career-image"
              src="https://images.pexels.com/photos/296881/pexels-photo-296881.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
              alt=""
            />
            <img
              className="career-image"
              src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb"
              alt=""
            />
            <img
              className="career-image"
              src="https://images.pexels.com/photos/515169/pexels-photo-515169.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CareerContainer
