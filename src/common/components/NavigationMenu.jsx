import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './NavigationMenu.scss';

export default class NavigationMenu extends Component {

  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.onMousedown, false);
    document.addEventListener('keydown', this.onKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMousedown, false);
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  onMousedown = (evt) => {
    const isClickOutside = !this._node.contains(evt.target);
    if (isClickOutside) this.setState({ open: false });
  }

  onKeydown= (evt) => {
    if (evt.which === 27) this.setState({ open: false });
  }

  toggle = () => {
    this.setState(prev => {
      return { open: !prev.open }
    });
  }

  render() {
    return (
      <div 
        className="nav-menu"
        ref={n => this._node = n}>

        <CSSTransition
          classNames="menu-options"
          in={this.state.open}
          timeout={150}>

          <ul className="menu-options">
            <li><a href="/admin">Activity Dashboard</a></li>
            <li><a href="/admin/users">User Management</a></li>
            <li><a href="/admin/entities">Entity Management</a></li>
            <li><a href="/admin/maintenance">Housekeeping</a></li>
          </ul>
        </CSSTransition>
        
        <div className="tab" onClick={this.toggle}>
          <span className="icon">&#xf0c9;</span>
        </div>
      </div>
    );
  }

}