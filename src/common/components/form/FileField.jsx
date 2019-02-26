import React, { Component } from 'react';

export default class FileField extends Component {

  state = {
    file: null  
  }

  onAttachFile = (evt) => {
    const f = evt.target.files[0];
    this.setState({ file: f });
    this.props.onChange(f);
  }

  render() {
    return (
      <dl className="fileupload">
        <dt><label htmlFor={`${this.props.name}_name`}>{this.props.label}</label></dt>
        <dd>
          {!this.props.buttonOnly &&
            <input
              type="text"
              id={`${this.props.name}_name`}
              name={`${this.props.name}_name`}
              disabled={true}
              value={(this.state.file && this.state.file.name) || ''} />
          }

          <input
            type="file"
            id={this.props.name}
            name={this.props.name}
            style={{display:'none'}}
            onChange={this.onAttachFile} />

          <label className={this.props.buttonClass} htmlFor={this.props.name}>
            <span className="icon">&#xf055;</span>
          </label>
        </dd>
      </dl>
    );
  }

}