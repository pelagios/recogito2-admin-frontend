import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './NavigationMenu.scss';

export default class NavigationMenu extends Component {

  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState(prev => {
      return { collapsed: !prev.collapsed }
    });
  }

  render() {
    return (
      <div className="nav-menu">
        <CSSTransition
          classNames="menu-options"
          in={this.state.collapsed}
          timeout={150}>

          <ul className="menu-options">
            <li>Activity Dashboard</li>
            <li>User Management</li>
            <li>Entity Management</li>
            <li>Housekeeping</li>
          </ul>
        </CSSTransition>
        
        <div className="tab" onClick={this.toggle}></div>
      </div>
    );
  }

}