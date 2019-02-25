import React, { Component } from 'react';

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
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    );
  }

}
