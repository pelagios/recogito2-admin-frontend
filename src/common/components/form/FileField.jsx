import React, { Component } from 'react';

export default class FileField extends Component {

  render() {
    return (
      <dl className="fileupload">
        <dt><label htmlFor={`${this.props.name}_name`}>{this.props.label}</label></dt>
        <dd>
          <input
            type="text"
            id={`${this.props.name}_name`}
            name={`${this.props.name}_name`}
            disabled={true}
            value={this.props.value} />

          <input
            type="file"
            id={this.props.name}
            name={this.props.name}
            style={{display:'none'}}
            onChange={this.props.onChange} />

          <label className={this.props.buttonClass} htmlFor={this.props.name}>
            <span className="icon">&#xf055;</span>
          </label>
        </dd>
      </dl>
    );
  }

}