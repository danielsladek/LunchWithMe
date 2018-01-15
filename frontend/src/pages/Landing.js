import React, { Component } from 'react'
import { Container  } from 'reactstrap'
import { FBLogin } from '../components/FBLogin/FBLogin'
import mockImg from '../lwm-mock.png'

class Landing extends Component {
  render() {
    return (
      <div className="hero">
        <Container>
          <h1 className="hero-title">Lunch with me</h1>
          <div className="title-text">
            Meet and lunch with your friends and colleagues!
          </div>
          <br />
          <FBLogin />
          <img
            className="hero-img"
            width="700px"
            src={mockImg}
            alt="Mock"
          />
        </Container>
      </div>
    )
  }
}

export default Landing
