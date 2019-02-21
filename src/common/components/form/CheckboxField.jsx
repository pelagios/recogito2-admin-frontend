import React, { Component } from 'react';

export default class CheckboxField extends Component {

  render() {
    return (
      <dl>
        <dt>
          <label htmlFor={this.props.name}>{this.props.label}</label>
        </dt>
        <dd>
          <input
            type="checkbox"
            id={this.props.name}
            name={this.props.name}
            value={this.props.checked}
            checked={this.props.checked}
            onChange={this.props.onChange} />
            
          <label htmlFor={this.props.name}></label>
        </dd>
      </dl>
    );
  }

}