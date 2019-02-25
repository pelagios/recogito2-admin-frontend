import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './FoldablePanel.scss';

export default class FoldablePanel extends Component {

  state = {
    open: false
  }

  toggle = () => {
    this.setState(prev => { return { open: !prev.open } });
  }

  render() {
    return (
      <div className="foldable-panel">
        <h2 onClick={this.toggle}>
          <span className="icon toggle">{this.state.open ? '\uf106' : '\uf107'}</span>
          {this.props.title}
        </h2>
        <CSSTransition
          classNames="inner"
          in={this.state.open}
          timeout={150}>

          <div className="inner">
            {this.props.children}
          </div>
        </CSSTransition>
      </div>
    );
  }

}
