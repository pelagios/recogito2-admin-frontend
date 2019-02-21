import React, { Component } from 'react';

export default class StringField extends Component {

  render() {
    return (
      <dl>
        <dt><label htmlFor={this.props.name}>{this.props.label}</label></dt>
        <dd>
          <input
            type="text"
            id={this.props.name}
            name={this.props.name}
            autoComplete="false"
            value={this.props.value}
            onChange={this.props.onChange} />
        </dd>
      </dl>
    );
  }

}