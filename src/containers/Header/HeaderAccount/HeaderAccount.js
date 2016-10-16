import React, { Component, PropTypes } from 'react'
import DefaultAvatar from '../../../static/assets/layouts/layout/img/avatar3_small.jpg'

import HeaderNotification from '../../../components/HeaderNotification'

class HeaderAccount extends Component {
  static propTypes = {
    notifications : PropTypes.array,
    notificationClick: PropTypes.func,
    account: PropTypes.object,
    logOutClick: PropTypes.func
  }

  componentWillMount() {

  }

  render () {
    const {notifications, notificationClick, logOutClick, account} = this.props
    const avatar = account.avatar || DefaultAvatar
    const displayName = account.displayName || "Unknow"

    return (
      <div className="top-menu">
        <ul className="nav navbar-nav pull-right">
          <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-bell"></i>
              <span className="badge badge-default"> {notifications && notifications.length} </span>
            </a>
            <ul className="dropdown-menu">
              { notifications.map((itm, i) => <HeaderNotification key={i} {...itm}
                onClick={_=> { notificationClick && notificationClick(itm) }} />)
              }
            </ul>
          </li>

          <li className="dropdown dropdown-user">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <img alt="" className="img-circle" src={avatar} />
              <span className="username username-hide-on-mobile"> {displayName} </span>
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-default">
              <li>
                <a href="">
                  <i className="icon-user"></i> My Profile
                </a>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-quick-sidebar-toggler">
            <a href="javascript:;" className="dropdown-toggle">
              <i className="icon-logout" onClick={_ => {
                logOutClick && logOutClick()
              }} ></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

HeaderAccount.defaultProps = {
  notifications : [],
  account: {},
  notificationClick : (itm) => {console.log("goto notify logout", itm)},
  logOutClick : () => {console.log("logout")}
}

export default HeaderAccount