import React from 'react'
import { getUserInfo } from './FBLogin/Reducer'
import {  browserHistory } from 'react-router'
import { connect } from 'react-redux'

class UserLoginCheckContainer extends React.Component {
  render() {
    if (this.props.userInfo.isLogged === true) {
      return this.props.children
      /* Stav routeru při přihlačování uživatele.
     * Zde se čeká na ověření přihlašovacích údajů (Facebook).
     */
    } else if (this.props.userInfo.loginProcessing) {
      return null
      /* Uživatel není přihlášen, ani se právě neřihlašuje.
     * Vrátíme login stránku pro přihlášení.
     */
    } else {
      browserHistory.replace('/login')
      return null
    }
  }
}

const mapStateToProps = (storeState, props) => {
  return {
    currentURL: props.location.pathname,
    userInfo: getUserInfo(storeState),
  }
}

export const UserLoginCheck = connect(mapStateToProps, {})(
  UserLoginCheckContainer
)
