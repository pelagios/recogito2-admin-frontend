import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Modal.scss';

export default class Modal extends Component {

  render() {
    return (
      <div className={`clicktrap ${this.props.className}`}>
        <div className="modal-wrapper">
          <Draggable handle={this.props.handle || '.modal-header'}>
            <div className="modal">
              <div className="modal-header">
                <h1 className="title">{this.props.title}</h1>
                <button
                  className="close nostyle"
                  onClick={this.props.onClose}>&#xe897;</button>
              </div>

              <div className="modal-body">
                {this.props.children}
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    )
  }

}
