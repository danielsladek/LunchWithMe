import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { TopMenu } from './TopMenu.js'
import { PageFooter } from './PageFooter.js'
import { connect } from 'react-redux'
import { getUserInfo } from './FBLogin/Reducer'

export class PageLayoutContainer extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { userInfo } = this.props

    return (
      <Container>
        {userInfo.isLogged ? <TopMenu userData={userInfo} /> : ''}
        <main>{this.props.children}</main>
        <PageFooter />
      </Container>
    )
  }
}

const mapStateToProps = (storeState, props) => {
  return {
    userInfo: getUserInfo(storeState),
  }
}

export const PageLayout = connect(mapStateToProps, {})(PageLayoutContainer)
