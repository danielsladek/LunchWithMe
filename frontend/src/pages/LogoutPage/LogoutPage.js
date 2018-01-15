import React, { Component } from 'react'
import { Row, Col  } from 'reactstrap'
import { getUserInfo } from '../../components/FBLogin/Reducer'
import { connect } from 'react-redux'
import { userLogout } from '../../components/FBLogin/Actions'
import { Link } from 'react-router'

export class LogoutPageContainer extends Component {
  constructor(props) {
    super(props)
    this.logoutUser = this.logoutUser.bind(this)
    this.logoutUser()
  }

  logoutUser() {
    this.props.userLogout(this.props.userLogin)
    sessionStorage.removeItem('isLogged')
    sessionStorage.removeItem('userInfo')
  }

  render() {
    return (
      <Row className="logoutPage">
        <Col>
          <h2>
            You have been successfuly logged out. Thank you for using our app!
          </h2>
          <Link to="/" className="nav-link">
            Back to login page
          </Link>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (storeState, props) => {
  return { userInfo: getUserInfo(storeState) }
}

export const LogoutPage = connect(mapStateToProps, {
  userLogout,
})(LogoutPageContainer)
