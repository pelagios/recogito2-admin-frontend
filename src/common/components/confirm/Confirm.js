import React, { Component } from 'react';
import { render} from 'react-dom';
import Draggable from 'react-draggable';

import './Confirm.scss';

class Prompt extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.onKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown, false);
  }

  onKeydown = (evt) => {
    if (evt.which === 27) this.props.onNo();
  }
  
  render() {
    const className = (this.props.type) ? `confirm-prompt ${this.props.type.toLowerCase()}` : 'confirm-prompt';

    return (
      <div className="clicktrap">
        <Draggable handle=".confirm-prompt-header">
          <div className={className}>
            <div className="confirm-prompt-header">
              <h1 className="title">{this.props.title}</h1>
            </div>

            <div className="confirm-prompt-body">
              <p className="message">{this.props.message}</p>
              <p className="buttons">
                 <button className="btn small yes" onClick={this.props.onYes}>YES</button>
                 <button className="btn small outline no" onClick={this.props.onNo}>NO</button>
              </p>
            </div>
          </div>
        </Draggable>
      </div>
    )
  }

}

export function confirm(properties) {
  const promptRoot = document.createElement('div');
  promptRoot.setAttribute('id', 'confirm-prompt-root');
  document.body.append(promptRoot);

  const onYes = () => {
    promptRoot.remove();
    properties.onConfirm();
  }

  const onNo = () => {
    promptRoot.remove();
    properties.onCancel && properties.onCancel();
  }

  render(
    <Prompt
      title={properties.title}
      type={properties.type}
      message={properties.message}
      onYes={onYes}
      onNo={onNo}
    />, promptRoot);
}